// useRef come contenitore di un valore che cambia SENZA causare un
// nuovo render. Confronto diretto con useState: lo stato aggiorna
// l'interfaccia, la ref no.

import { useState, useRef } from "react";
import "./comuni.css";

function UseRefVariante() {
  const [contatoreState, setContatoreState] = useState(0);
  const contatoreRef = useRef(0);

  function handleClickState() {
    setContatoreState(contatoreState + 1); // causa un nuovo render
  }

  function handleClickRef() {
    contatoreRef.current = contatoreRef.current + 1; // NON causa un render
    console.log("Valore della ref:", contatoreRef.current);
  }

  return (
    <div className="box">
      <h2 className="titolo">useState vs useRef</h2>
      <p className="sottotitolo">Stato (visibile in pagina): {contatoreState}</p>
      <p className="sottotitolo">Ref (visibile solo in console, apri il pannello)</p>
      <div className="bottone-riga">
        <button className="bottone" onClick={handleClickState}>
          Incrementa stato
        </button>
        <button className="bottone bottone--secondario" onClick={handleClickRef}>
          Incrementa ref
        </button>
      </div>
    </div>
  );
}

export default UseRefVariante;
