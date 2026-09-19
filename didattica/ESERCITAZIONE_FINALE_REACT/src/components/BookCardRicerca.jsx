/* ============================================
   components/BookCardRicerca.jsx
   Card libro mostrata tra i risultati di ricerca:
   l'unica azione possibile è aggiungerlo alla libreria.

   Prima questa logica viveva in un unico BookCard.jsx
   insieme a quella, molto diversa, della card in libreria
   (select stato + rimozione + animazione di uscita), scelta
   con un if su una prop stringa modalita === 'ricerca' |
   'libreria'. Un componente che si comporta in due modi
   radicalmente diversi in base a una stringa è difficile da
   leggere: bisogna sempre tenere a mente "in quale modalità
   siamo" per capire quale ramo del JSX conta davvero.
   Separarli in due componenti (che condividono solo la
   parte visiva comune, BookCardBase) rende ciascuno più
   corto e leggibile per quello che effettivamente fa.
   ============================================ */
import BookCardBase from './BookCardBase';

export default function BookCardRicerca({libro, onAggiungi, giaAggiunto}) {
  return (
    <BookCardBase libro={libro}>
      <button
        className={`btn btn-piccolo ${giaAggiunto ? 'btn-secondario' : 'btn-primario'}`}
        onClick={() => onAggiungi(libro)}
        disabled={giaAggiunto}>
        {giaAggiunto ? 'Già aggiunto' : '+ Aggiungi'}
      </button>
    </BookCardBase>
  );
}
