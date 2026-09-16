// ESERCIZIO — useReducer
// Costruisci un semaforo con tre stati ("rosso", "giallo", "verde")
// che passano in sequenza ad ogni click, gestiti da un reducer.

import { useReducer } from "react";
import "./comuni.css";

function reducer(state/* , action */) {
  // TODO 1: gestisci l'azione "avanti":
  // da "rosso" si passa a "verde", da "verde" a "giallo",
  // da "giallo" si torna a "rosso"
  // (suggerimento: uno switch su state, non su action.type, oppure
  // uno switch su action.type con più case)
  /* switch (action.type) {
    case "avanti": */
      switch (state) {
        case "rosso":
          return "verde";
        case "verde":
          return "giallo";
        case "giallo":
          return "rosso";
/*         default:
          return state; */
      }
    /* default:
      return state;
  } */
}

function UseReducerEsercizio() {
  const [colore, dispatch] = useReducer(reducer, "rosso");

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: semaforo</h2>
      {/* TODO 2: mostra il colore corrente, magari con un badge */}
      <p>
        Stato attuale: <span className="badge">{colore.toUpperCase()}</span>
      </p>
      <div className="bottone-riga">
        <button className="bottone" onClick={() => dispatch(/* { type: "avanti" } */)}>
          Avanti
        </button>
      </div>
    </div>
  );
}

export default UseReducerEsercizio;
