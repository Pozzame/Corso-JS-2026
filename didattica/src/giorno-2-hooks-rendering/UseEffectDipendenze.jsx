// useEffect — l'array delle dipendenze controlla QUANDO l'effetto
// viene rieseguito. Qui i tre comportamenti fianco a fianco, con un
// log in console per vedere quando ciascun effetto scatta.

import { useState, useEffect } from "react";
import "./comuni.css";

function UseEffectDipendenze() {
  const [contatore, setContatore] = useState(0);
  const [testo, setTesto] = useState("");

  // Nessun array: si esegue dopo OGNI render (anche per il testo)
  useEffect(() => {
    console.log("Effetto SENZA array — eseguito ad ogni render");
  });

  // Array vuoto: si esegue una sola volta, al montaggio
  useEffect(() => {
    console.log("Effetto con [] — eseguito solo al montaggio");
  }, []);

  // Array con una dipendenza: si esegue solo quando "contatore" cambia
  useEffect(() => {
    console.log("Effetto con [contatore] — contatore è cambiato:", contatore);
  }, [contatore]);

  return (
    <div className="box">
      <h2 className="titolo">Apri la console per vedere i log</h2>
      <div className="bottone-riga">
        <button className="bottone" onClick={() => setContatore(contatore + 1)}>
          Incrementa contatore ({contatore})
        </button>
      </div>
      <input
        className="input"
        style={{ marginTop: "8px" }}
        value={testo}
        onChange={(e) => setTesto(e.target.value)}
        placeholder="Scrivi qualcosa (non tocca l'effetto con [contatore])"
      />
    </div>
  );
}

export default UseEffectDipendenze;
