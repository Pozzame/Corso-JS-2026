// ESERCIZIO — children
// Completa i TODO per creare un componente "Scheda" che accetta sia
// una prop che children.

import "./ChildrenEsercizio.css";

// TODO 1: crea il componente Scheda che riceve la prop "intestazione"
// e i children, mostrando l'intestazione in un <h3> e i children
// sotto in un <div>

function ChildrenEsercizio() {
  return (
    <div className="esercizio-children">
      <h2>Esercizio children</h2>

      {/* TODO 2: usa Scheda due volte, con intestazioni diverse e
          contenuto diverso passato come children */}
    </div>
  );
}

export default ChildrenEsercizio;
