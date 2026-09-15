// ESERCIZIO — useEffect
// Costruisci un contatore di secondi trascorsi dal montaggio del
// componente, con un pulsante per fermarlo.

import { useState, useEffect } from "react";
import "./comuni.css";

function UseEffectEsercizio() {
  // TODO 1: crea uno stato "secondi", inizialmente 0
  const [secondi, setSecondi] = useState(0);
  // TODO 2: crea uno stato booleano "attivo", inizialmente true
const [attivo, setAttivo] = useState(true);
  // TODO 3: dentro useEffect, avvia un setInterval che incrementa
  // "secondi" ogni 1000ms, ma solo se "attivo" è true
  // Ricorda la funzione di cleanup con clearInterval
    useEffect(() => {
    let intervallo = setInterval(() => {
      setSecondi(() => attivo ? secondi + 1 : secondi);
    }, 1000);

    return () => clearInterval(intervallo);
  },);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: cronometro</h2>
      {/* TODO 4: mostra qui il valore di "secondi" */}
      <p className="sottotitolo">{secondi}</p>
      <div className="bottone-riga">
        {/* TODO 5: bottone che mette "attivo" a false per fermare il conteggio */}
        <button className="bottone bottone--secondario" onClick={() => setAttivo(!attivo)}>
          Start/Stop</button>
      </div>
    </div>
  );
}

export default UseEffectEsercizio;
