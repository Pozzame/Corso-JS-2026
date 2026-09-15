// Rendering condizionale — in JSX non si può usare if direttamente
// (è uno statement, non un'espressione). Si usano ternario e &&.

import { useState } from "react";
import "./comuni.css";

function RenderingCondizionaleBase() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="box">
      <h2 className="titolo">
        {isLogged ? "Benvenuto!" : "Effettua il login"}
      </h2>

      {isLogged && <p className="sottotitolo">Contenuto riservato</p>}

      <button className="bottone" onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "Esci" : "Accedi"}
      </button>
    </div>
  );
}

export default RenderingCondizionaleBase;
