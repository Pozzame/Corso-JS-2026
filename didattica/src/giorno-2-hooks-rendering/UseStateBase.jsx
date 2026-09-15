// useState — stato interno di un componente.
// Non modificare mai lo stato direttamente: usare sempre la funzione
// di aggiornamento restituita da useState.

import { useState } from "react";
import "./comuni.css";

function UseStateBase() {
  const [contatore, setContatore] = useState(0);

  return (
    <div className="box">
      <h2 className="titolo">Contatore: {contatore}</h2>
      <div className="bottone-riga">
        <button className="bottone" onClick={() => setContatore(contatore + 1)}>
          Incrementa
        </button>
        <button className="bottone bottone--secondario" onClick={() => setContatore(contatore - 1)}>
          Decrementa
        </button>
      </div>
    </div>
  );
}

export default UseStateBase;
