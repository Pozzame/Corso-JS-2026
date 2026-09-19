/* ============================================
   hooks/useLibreria.js
   Custom hook per gestire la libreria personale.

   Nel progetto realizzato nel modulo js questa logica era distribuita tra
   due costruttori (Libro e Libreria) in libreria.js,
   con un'istanza globale condivisa da tutto il codice.

   In React raccogliamo la stessa logica in un hook:
   - lo stato è gestito da React con useState
   - la persistenza su localStorage è sincronizzata
     con useEffect ogni volta che lo stato cambia
   - l' hook restituisce dati e funzioni pronti
     all'uso nei componenti, senza variabili globali
   ============================================ */
import {useState, useEffect} from 'react';
const CHIAVE_STORAGE = 'bookshelf3';

export const STATI = {
  DA_LEGGERE: 'da-leggere',
  IN_LETTURA: 'in-lettura',
  LETTO: 'letto'
};

export function useLibreria() {
  const [libreria, setLibreria] = useState(() => {
    const salvato = localStorage.getItem(CHIAVE_STORAGE);
    return salvato ? JSON.parse(salvato) : [];
  });

  useEffect(() => {
    localStorage.setItem(CHIAVE_STORAGE, JSON.stringify(libreria));
  }, [libreria]);

  function aggiungiLibro(datiLibro) {
    setLibreria(prev => {
      if (prev.some(libro => libro.id === datiLibro.id)) {
        return prev;
      }
      return [
        ...prev,
        {
          id: datiLibro.id,
          titolo: datiLibro.titolo,
          autore: datiLibro.autore,
          anno: datiLibro.anno,
          copertina: datiLibro.copertina || null,
          stato: STATI.DA_LEGGERE
        }
      ];
    });
  }

  function rimuoviLibro(id) {
    setLibreria(prev => prev.filter(libro => libro.id !== id));
  }

  function cambiaStato(id, nuovoStato) {
    setLibreria(prev => prev.map(libro => (libro.id === id ? {...libro, stato: nuovoStato} : libro)));
  }

  function isInLibreria(id) {
    return libreria.some(libro => libro.id === id);
  }

  const statistiche = {
    totale: libreria.length,
    letti: libreria.filter(libro => libro.stato === STATI.LETTO).length,
    inLettura: libreria.filter(libro => libro.stato === STATI.IN_LETTURA).length,
    daLeggere: libreria.filter(libro => libro.stato === STATI.DA_LEGGERE).length
  };

  return {
    libreria,
    statistiche,
    aggiungiLibro,
    rimuoviLibro,
    cambiaStato,
    isInLibreria
  };
}
