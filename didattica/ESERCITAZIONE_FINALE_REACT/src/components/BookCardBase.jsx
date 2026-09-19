/* ============================================
   components/BookCardBase.jsx
   Parte visiva comune a ogni card libro: copertina +
   informazioni (titolo, autore, anno) + un eventuale
   badge (es. lo stato di lettura).

   Le azioni (bottoni, select) cambiano parecchio a seconda
   del contesto — in ricerca c'è solo "Aggiungi", in libreria
   c'è il cambio di stato e la rimozione — quindi restano
   fuori da qui e arrivano come `children`: così questo
   componente non deve sapere nulla di "modalità ricerca" o
   "modalità libreria", sa solo disegnare un libro. Sono
   BookCardRicerca.jsx e BookCardLibreria.jsx a decidere cosa
   passargli.
   ============================================ */
export default function BookCardBase({libro, badge = null, classeExtra = '', children}) {
  const copertina =
    libro.copertina ?
      <img src={libro.copertina} alt="" className="libro-copertina" />
    : <div className="libro-copertina-placeholder">
        <img src="/img/icons/libro.svg" />
      </div>;

  return (
    <div className={`libro-card${classeExtra}`}>
      {copertina}

      <div className="libro-info">
        <div className="libro-titolo">{libro.titolo}</div>
        <div className="libro-autore">{libro.autore}</div>
        <div className="libro-anno">{libro.anno}</div>
        {badge}
      </div>

      <div className="libro-azioni">{children}</div>
    </div>
  );
}
