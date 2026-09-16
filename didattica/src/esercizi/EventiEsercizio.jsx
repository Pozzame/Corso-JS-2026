// ESERCIZIO — eventi
// Costruisci una lista di preferiti: click su un elemento per
// segnarlo come "preferito", passando l'id all'handler.

import { useState } from "react";
import "./comuni.css";

const brani = [
  { id: 1, titolo: "Brano A" },
  { id: 2, titolo: "Brano B" },
  { id: 3, titolo: "Brano C" },
];

function EventiEsercizio() {
  // TODO 1: crea uno stato "preferiti", array di id, inizialmente vuoto

  const [ preferiti, setPreferiti ] = useState([]);

  function handlePreferito(id) {
    // TODO 2: se l'id è già in "preferiti", rimuovilo; altrimenti aggiungilo
    // (suggerimento: usa includes() e poi filter() o spread)
    if (preferiti.includes(id)) {
      setPreferiti(preferiti.filter((favId) => favId !== id));
    } else {
      setPreferiti([...preferiti, id]);
    }
    console.log(preferiti);
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: preferiti</h2>
      <ul className="lista">
        {brani.map((brano) => (
          <li key={brano.id}>
            {brano.titolo}
            {/* TODO 3: il testo del bottone e la classe (badge) devono
                cambiare a seconda che il brano sia già nei preferiti */}
            <button
              className={preferiti.includes(brano.id) ? "bottone bottone--secondario" : "badge bottone--secondario"}
              onClick={() => handlePreferito(brano.id)}
            >
              {preferiti.includes(brano.id) ? "Rimuovi da Preferiti" : "Aggiungi a Preferito"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventiEsercizio;
