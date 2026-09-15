// useState — errori tipici
// Il codice sbagliato è commentato: sotto ogni errore c'è la
// versione corretta, che è quella effettivamente renderizzata.

import { useState } from "react";
import "./comuni.css";

// ❌ ERRORE 1 — modificare lo stato direttamente
//
// function Contatore() {
//   let [contatore, setContatore] = useState(0);
//   function handleClick() {
//     contatore++;              // il componente NON si ri-renderizza:
//   }                           // React non sa che il dato è cambiato
//   return <button onClick={handleClick}>{contatore}</button>;
// }

// ❌ ERRORE 2 — chiamare setState direttamente nel corpo del
// componente, invece che dentro un handler
//
// function Contatore() {
//   const [contatore, setContatore] = useState(0);
//   setContatore(contatore + 1);  // eseguito ad ogni render
//   return <p>{contatore}</p>;    // → nuovo render → loop infinito
// }

// ✅ CORRETTO — la funzione di aggiornamento si chiama solo
// dentro un handler, in risposta a un evento
function UseStateErrori() {
  const [contatore, setContatore] = useState(0);

  function handleClick() {
    setContatore(contatore + 1);
  }

  return (
    <div className="box box--errore">
      <h2 className="titolo">Versione corretta</h2>
      <p className="sottotitolo">Valore: {contatore}</p>
      <button className="bottone" onClick={handleClick}>
        Incrementa (in modo sicuro)
      </button>
    </div>
  );
}

export default UseStateErrori;
