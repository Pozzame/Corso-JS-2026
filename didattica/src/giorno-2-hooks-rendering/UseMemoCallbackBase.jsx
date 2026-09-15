// useMemo e useCallback — strumenti di ottimizzazione.
// Da usare solo quando si misura un reale problema di performance,
// non in modo indiscriminato.

import { useState, useMemo, useCallback } from "react";
import "./comuni.css";

function UseMemoCallbackBase() {
  const [testo, setTesto] = useState("");
  const [contatoreClick, setContatoreClick] = useState(0);

  const listaLunga = ["mela", "pera", "banana", "arancia", "kiwi", "ananas"];

  // Ricalcolato solo quando cambia "testo"
  const risultatoFiltrato = useMemo(() => {
    return listaLunga.filter((item) => item.includes(testo));
  }, [testo]);

  // Ricreata solo quando cambiano le dipendenze (qui nessuna: [])
  const handleClick = useCallback(() => {
    setContatoreClick((c) => c + 1);
  }, []);

  return (
    <div className="box">
      <h2 className="titolo">Filtra frutta</h2>
      <input
        className="input"
        value={testo}
        onChange={(e) => setTesto(e.target.value)}
        placeholder="Filtra frutta"
      />
      <ul className="lista">
        {risultatoFiltrato.map((frutto) => (
          <li key={frutto}>{frutto}</li>
        ))}
      </ul>
      <div className="bottone-riga">
        <button className="bottone" onClick={handleClick}>
          Click registrati: {contatoreClick}
        </button>
      </div>
    </div>
  );
}

export default UseMemoCallbackBase;
