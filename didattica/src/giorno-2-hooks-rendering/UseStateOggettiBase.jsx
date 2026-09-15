// useState con oggetti: si crea sempre un nuovo oggetto, non si
// modifica quello esistente. React confronta i riferimenti in
// memoria per capire se lo stato è cambiato.

import { useState } from "react";
import "./comuni.css";

function UseStateOggettiBase() {
  const [utente, setUtente] = useState({ nome: "Luca", eta: 25 });

  function handleCompleanno() {
    // Corretto: nuovo oggetto con spread operator
    setUtente({ ...utente, eta: utente.eta + 1 });
  }

  return (
    <div className="box">
      <h2 className="titolo">{utente.nome}</h2>
      <p className="sottotitolo">{utente.eta} anni</p>
      <button className="bottone" onClick={handleCompleanno}>
        Festeggia il compleanno
      </button>
    </div>
  );
}

export default UseStateOggettiBase;
