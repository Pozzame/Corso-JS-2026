/* ============================================
   components/BookCardLibreria.jsx
   Card libro mostrata nella libreria personale: badge di
   stato, select per cambiarlo, bottone per rimuoverlo (con
   una breve animazione di uscita prima di avvisare il
   genitore — vedi il commento su handleRimuovi).

   Vedi BookCardRicerca.jsx per il perché della separazione
   da un unico componente BookCard con due modalità.
   ============================================ */
import {useState} from 'react';
import BookCardBase from './BookCardBase';
import {STATI} from '../hooks/useLibreria';

const ETICHETTE_STATO = {
  [STATI.DA_LEGGERE]: {testo: 'Da leggere', classe: 'stato-da-leggere'},
  [STATI.IN_LETTURA]: {testo: 'In lettura', classe: 'stato-in-lettura'},
  [STATI.LETTO]: {testo: 'Letto', classe: 'stato-letto'}
};

export default function BookCardLibreria({libro, onRimuovi, onCambiaStato}) {
  const [inUscita, setInUscita] = useState(false);
  const etichetta = ETICHETTE_STATO[libro.stato];

  function handleRimuovi() {
    setInUscita(true);
    // Aspettiamo la fine dell'animazione CSS (300ms, vedi @keyframes
    // cardEsci / .card-in-uscita in index.css) prima di avvisare il
    // genitore, che toglierà il libro dallo stato e smonterà la card
    setTimeout(() => onRimuovi(libro.id), 300);
  }

  return (
    <BookCardBase
      libro={libro}
      classeExtra={inUscita ? ' card-in-uscita' : ''}
      badge={etichetta && <span className={`libro-stato ${etichetta.classe}`}>{etichetta.testo}</span>}>
      <select
        className="select-stato"
        value={libro.stato}
        onChange={e => onCambiaStato(libro.id, e.target.value)}>
        <option value={STATI.DA_LEGGERE}>Da leggere</option>
        <option value={STATI.IN_LETTURA}>In lettura</option>
        <option value={STATI.LETTO}>Letto</option>
      </select>

      <button className="btn btn-secondario btn-piccolo" onClick={handleRimuovi}>
        Rimuovi
      </button>
    </BookCardBase>
  );
}
