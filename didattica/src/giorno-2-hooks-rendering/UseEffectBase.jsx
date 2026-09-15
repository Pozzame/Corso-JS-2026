// useEffect — effetti collaterali. Esempio con un timer e la
// relativa funzione di cleanup, eseguita allo smontaggio.

import { useState, useEffect } from "react";
import "./comuni.css";

function UseEffectBase() {
  const [ora, setOra] = useState(new Date());

  useEffect(() => {
    const intervallo = setInterval(() => {
      setOra(new Date());
    }, 1000);

    return () => clearInterval(intervallo);
  }, []); // array vuoto: eseguito solo al montaggio

  return (
    <div className="box">
      <h2 className="titolo">Orologio</h2>
      <p className="sottotitolo">{ora.toLocaleTimeString()}</p>
    </div>
  );
}

export default UseEffectBase;
