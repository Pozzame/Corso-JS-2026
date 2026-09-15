// children e props insieme: Riquadro riceve una prop "titolo" e,
// allo stesso tempo, accetta contenuto libero come children.
// È il pattern più comune per componenti "contenitore" riusabili
// (box, modali, sezioni di pagina).

import "./ChildrenEProps.css";

function Riquadro({ titolo, children }) {
  return (
    <div className="riquadro">
      <h3 className="riquadro__titolo">{titolo}</h3>
      <div className="riquadro__corpo">{children}</div>
    </div>
  );
}

function ChildrenEProps() {
  return (
    <div className="riquadri">
      <Riquadro titolo="Informazioni corso">
        <p>240 ore, sette moduli, da zero a full-stack.</p>
      </Riquadro>

      <Riquadro titolo="Prossima lezione">
        <p>Hooks: useState, useEffect, useRef.</p>
        <button className="riquadro__bottone">Vai al materiale</button>
      </Riquadro>
    </div>
  );
}

export default ChildrenEProps;
