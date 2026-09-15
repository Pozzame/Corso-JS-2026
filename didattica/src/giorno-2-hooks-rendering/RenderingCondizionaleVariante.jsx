// Più condizioni insieme: caricamento, errore, dati pronti.
// Pattern molto comune quando lo stato arriva da una richiesta
// (lo si userà con le API al giorno 4): return anticipati per
// ciascun caso, invece di annidare ternari illeggibili.

import { useState } from "react";
import "./comuni.css";

function RenderingCondizionaleVariante() {
  const [stato, setStato] = useState("caricamento"); // "caricamento" | "errore" | "pronto"

  if (stato === "caricamento") {
    return (
      <div className="box">
        <p className="sottotitolo">Caricamento in corso...</p>
        <SelettoreStato onCambia={setStato} />
      </div>
    );
  }

  if (stato === "errore") {
    return (
      <div className="box box--errore">
        <p className="sottotitolo">Si è verificato un errore.</p>
        <SelettoreStato onCambia={setStato} />
      </div>
    );
  }

  return (
    <div className="box">
      <h2 className="titolo">Dati pronti</h2>
      <span className="badge badge--successo">Caricato con successo</span>
      <div style={{ marginTop: "8px" }}>
        <SelettoreStato onCambia={setStato} />
      </div>
    </div>
  );
}

function SelettoreStato({ onCambia }) {
  return (
    <div className="bottone-riga">
      <button className="bottone bottone--secondario" onClick={() => onCambia("caricamento")}>
        Caricamento
      </button>
      <button className="bottone bottone--secondario" onClick={() => onCambia("errore")}>
        Errore
      </button>
      <button className="bottone bottone--secondario" onClick={() => onCambia("pronto")}>
        Pronto
      </button>
    </div>
  );
}

export default RenderingCondizionaleVariante;
