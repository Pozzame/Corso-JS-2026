// useState con array: stessa regola degli oggetti. Per aggiungere o
// rimuovere un elemento si crea un nuovo array, non si modifica
// quello esistente con push/splice.

import { useState } from "react";
import "./comuni.css";

function UseStateOggettiVariante() {
  const [attivita, setAttivita] = useState(["Ripasso JSX", "Esercizi props"]);
  const [testo, setTesto] = useState("");

  function handleAggiungi() {
    if (testo.trim() === "") return;
    // Corretto: nuovo array con spread, non attivita.push(testo)
    setAttivita([...attivita, testo]);
    setTesto("");
  }

  function handleRimuovi(index) {
    // Corretto: nuovo array senza l'elemento, non attivita.splice(index, 1)
    setAttivita(attivita.filter((_, i) => i !== index));
  }

  return (
    <div className="box">
      <h2 className="titolo">Attività di oggi</h2>
      <div className="bottone-riga">
        <input
          className="input"
          value={testo}
          onChange={(e) => setTesto(e.target.value)}
          placeholder="Nuova attività"
        />
        <button className="bottone" onClick={handleAggiungi}>
          Aggiungi
        </button>
      </div>
      <ul className="lista">
        {attivita.map((voce, index) => (
          <li key={index}>
            {voce}
            <button className="bottone bottone--secondario" onClick={() => handleRimuovi(index)}>
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateOggettiVariante;
