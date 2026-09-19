/* ============================================
   pages/Libreria.jsx
   Pagina della libreria personale con filtri.

   Corrisponde a libreria.html + libreria-main.js
   nella Fase 2: stessa struttura visiva, stessa
   logica di filtro, stesse classi CSS.
   ============================================ */

import { useState } from "react";
import BookCardLibreria from "../components/BookCardLibreria";
import SezioneBookCardsStatistics from "../components/BookCardsStatistics";
import { useLibreriaCtx } from "../context/LibreriaContext";
import { STATI } from "../hooks/useLibreria";
import SezioneHero from "../components/Hero";

// 'tutti' non è uno stato reale del libro, esiste solo per la UI dei
// filtri: per questo non viene da STATI, gli altri tre valori sì, così
// se un domani cambiasse il nome di uno stato basta cambiarlo in un
// punto solo (hooks/useLibreria.js) invece che in tre file diversi.
const FILTRI = [
  { valore: "tutti", etichetta: "Tutti" },
  { valore: STATI.DA_LEGGERE, etichetta: "Da leggere" },
  { valore: STATI.IN_LETTURA, etichetta: "In lettura" },
  { valore: STATI.LETTO, etichetta: "Letti" },
];

export default function Libreria() {
  const { libreria, rimuoviLibro, cambiaStato } = useLibreriaCtx();
  const [filtroAttivo, setFiltroAttivo] = useState("tutti");

/*const libreriafiltrata = filtroAttivo === 'tutti' ? libreria : libreria.filter(l => l.stato === filtroAttivo); */
  const libreriafiltrata = filtroAttivo === "tutti" ? libreria : 
        filtroAttivo === STATI.IN_LETTURA
        ? libreria.filter((l) => l.stato === STATI.IN_LETTURA || l.stato === STATI.QUASI_FINITO )
        : libreria.filter(l => l.stato === filtroAttivo);
  const hero = {
    h1: "La mia libreria",
    p: "Scrivi descrizione",
  };
  return (
    <main>
      <SezioneHero hero={hero} />

      <SezioneBookCardsStatistics />

      {/* Filtri — stessa logica dei btn-filtro in libreria-main.js */}
      <div className="filtri">
        {FILTRI.map((filtro) => (
          <button
            key={filtro.valore}
            className={`btn btn-piccolo ${filtroAttivo === filtro.valore ? "btn-primario" : "btn-secondario"}`}
            onClick={() => setFiltroAttivo(filtro.valore)}
          >
            {filtro.etichetta}
          </button>
        ))}
      </div>

      {libreria.length === 0 ? (
        <div className="stato-messaggio">
          <img src="/img/icons/vuota.svg" alt="" />
          <p>La tua libreria è vuota.</p>
          <p>
            Vai su <strong>Cerca</strong> per aggiungere i tuoi primi libri.
          </p>
        </div>
      ) : libreriafiltrata.length === 0 ? (
        <div className="stato-messaggio">
          <img src="/img/icons/segnalibro.svg" alt="" />
          <p>Nessun libro con questo stato.</p>
        </div>
      ) : (
        <div className="libri-griglia">
          {libreriafiltrata.map((libro) => (
            <BookCardLibreria
              key={libro.id}
              libro={libro}
              onRimuovi={rimuoviLibro}
              onCambiaStato={cambiaStato}
            />
          ))}
        </div>
      )}
    </main>
  );
}
