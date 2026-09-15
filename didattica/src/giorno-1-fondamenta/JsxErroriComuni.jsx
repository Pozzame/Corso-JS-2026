// JSX — errori tipici
// Il codice sbagliato è commentato (non può compilare): sotto ogni
// errore c'è la versione corretta, che è quella effettivamente
// renderizzata da questo file.

import "./JsxErroriComuni.css";

// ❌ ERRORE 1 — due elementi radice, senza un contenitore comune
//
// function Esempio() {
//   return (
//     <h1>Titolo</h1>
//     <p>Testo</p>
//   );
// }
//
// Errore in console: "Adjacent JSX elements must be wrapped in an
// enclosing tag". Si corregge avvolgendo tutto in un <div> o in un
// Fragment <>...</>.

// ❌ ERRORE 2 — uso di "class" invece di "className"
//
// <h1 class="titolo">Ciao</h1>
//
// Non genera un errore di compilazione, ma React lo segnala in
// console come warning e lo stile NON viene applicato: "class" è una
// parola riservata in JavaScript, in JSX diventa "className".

// ❌ ERRORE 3 — tag self-closing senza lo slash finale
//
// <img src="/logo.png">
// <input type="text">
//
// Errore di compilazione: in JSX ogni tag va chiuso esplicitamente,
// anche quelli che in HTML puro non richiedono chiusura.
// Corretto: <img src="/logo.png" /> e <input type="text" />

function JsxErroriComuni() {
  return (
    <div className="errori-esempio">
      <h1 className="errori-esempio__titolo">Versione corretta</h1>
      <p>Un solo contenitore radice, className, tag chiusi correttamente.</p>
      <img className="errori-esempio__logo" src="/logo.png" alt="Logo" />
      <input type="text" placeholder="Tag self-closing chiuso" />
    </div>
  );
}

export default JsxErroriComuni;
