// useRef — restituisce un oggetto con una proprietà .current che
// persiste tra i render senza causare un nuovo render quando cambia.
// Uso più comune: accesso diretto a un elemento del DOM.

import { useRef } from "react";
import "./comuni.css";

function UseRefBase() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="box">
      <h2 className="titolo">Metti a fuoco un campo</h2>
      <div className="bottone-riga">
        <input ref={inputRef} className="input" type="text" placeholder="Cliccami col bottone" />
        <button className="bottone" onClick={handleClick}>
          Metti a fuoco
        </button>
      </div>
    </div>
  );
}

export default UseRefBase;
