// ESERCIZIO — lifting state up
// Due componenti fratelli (Interruttore e Indicatore) devono
// condividere uno stato booleano "acceso", gestito dal genitore.

import { useState } from "react";
import "./comuni.css";

function Interruttore({ acceso, onChange }) {
  // TODO 1: bottone che chiama onChange invertendo il valore di "acceso"
  return <button className="bottone" onClick={() => onChange(!acceso)}>Cambia stato</button>;
}

function Indicatore({ acceso }) {
  // TODO 2: mostra un badge diverso (successo/errore) a seconda di "acceso"
  return <span className="badge">{acceso ? "ACCESO" : "SPENTO"}</span>;
}

function LiftingStateEsercizio() {
  const [acceso, setAcceso] = useState(false);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: interruttore condiviso</h2>
      <Interruttore acceso={acceso} onChange={setAcceso} />
      <Indicatore acceso={acceso} />
    </div>
  );
}

export default LiftingStateEsercizio;
