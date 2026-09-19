/* ============================================
   hooks/useRicerca.js
   Custom hook per la ricerca libri su Open Library.

   Corrisponde a main.js + api.js del progetto realizzato nel modulo js

 Se l'utente lancia una nuova ricerca prima che la precedente sia tornata, le due risposte potevano arrivare in un ordine imprevedibile (race condition): la ricerca vecchia, arrivando dopo, sovrascriveva i risultati di quella nuova. Il progetto del modulo precedente risolveva questo problema con un AbortController; 
 qui usiamo lo stesso principio ma tenuto in un useRef (non in una variabile di modulo
 condivisa) perché ogni componente che usa questo hook deve avere la propria ricerca indipendente.
   ============================================ */
import {useState, useRef, useEffect} from 'react';
import {cercaLibri} from '../services/api';

export function useRicerca() {
  const [risultati, setRisultati] = useState([]);
  const [inCaricamento, setInCaricamento] = useState(false);
  const [errore, setErrore] = useState(null);
  const [ultimaQuery, setUltimaQuery] = useState('');

  // Controller della richiesta fetch attualmente attiva (se c'è)
  const controllerRef = useRef(null);
  // Evita di aggiornare lo stato se il componente è già stato smontato
  // (es. l'utente cambia pagina mentre la ricerca è ancora in corso)
  const montatoRef = useRef(true);

  useEffect(() => {
    montatoRef.current = true;
    return () => {
      montatoRef.current = false;
      controllerRef.current?.abort();
    };
  }, []);

  async function handleCerca(query) {
    // Una ricerca precedente ancora attiva non ci interessa più: annullarla
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setInCaricamento(true);
    setUltimaQuery(query);
    setErrore(null);

    try {
      const libri = await cercaLibri(query, {signal: controller.signal});
      if (!montatoRef.current) return;
      setRisultati(libri);
    } catch (error) {
      // Se la richiesta è stata annullata di proposito (nuova ricerca o
      // smontaggio), non è un errore da mostrare all'utente
      if (error.name === 'AbortError') return;
      if (!montatoRef.current) return;
      console.error(error);
      setErrore('Si è verificato un errore. Riprova più tardi.');
    } finally {
      // Aggiorna "in caricamento" solo se questa è ancora la richiesta
      // corrente: se nel frattempo è partita una ricerca più recente,
      // sarà lei a decidere quando il caricamento finisce
      if (montatoRef.current && controllerRef.current === controller) {
        setInCaricamento(false);
      }
    }
  }

  function handleChiudiRisultati() {
    controllerRef.current?.abort();
    setRisultati([]);
    setErrore(null);
    setUltimaQuery('');
  }

  return {
    risultati,
    inCaricamento,
    errore,
    ultimaQuery,
    handleCerca,
    handleChiudiRisultati
  };
}
