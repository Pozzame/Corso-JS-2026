// Props — sono in sola lettura: un componente figlio non può mai
// modificare le props che riceve. Se il figlio deve far cambiare un
// dato, il genitore gli passa una funzione (callback) da chiamare:
// lo stato resta gestito dal genitore, il figlio comunica "è successo
// questo", non modifica direttamente il dato.

import { useState } from "react";
import "./PropsSolaLettura.css";

// ❌ ERRORE — il figlio tenta di modificare la prop ricevuta
//
// function ContatoreFiglio({ valore }) {
//   function handleClick() {
//     valore = valore + 1; // non ha alcun effetto visibile:
//                          // la prop viene sovrascritta al prossimo
//                          // render dal valore che arriva dal genitore
//   }
//   return <button onClick={handleClick}>{valore}</button>;
// }

// ✅ CORRETTO — il figlio riceve il valore e una funzione per
// segnalare al genitore cosa deve cambiare
function ContatoreFiglio({ valore, onIncrementa }) {
  return (
    <button className="contatore-figlio" onClick={onIncrementa}>
      Valore: {valore}
    </button>
  );
}

function PropsSolaLettura() {
  const [contatore, setContatore] = useState(0);

  function handleIncrementa() {
    setContatore(contatore + 1);
  }

  return (
    <div className="props-sola-lettura">
      <p>Lo stato vive qui, nel genitore. Il figlio lo mostra e chiede di cambiarlo.</p>
      <ContatoreFiglio valore={contatore} onIncrementa={handleIncrementa} />
    </div>
  );
}

export default PropsSolaLettura;
