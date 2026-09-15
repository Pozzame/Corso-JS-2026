// La prop speciale children: tutto ciò che viene scritto tra il tag
// di apertura e quello di chiusura del componente.

import "./ChildrenBase.css";

function Contenitore({ children }) {
  return <div className="contenitore">{children}</div>;
}

function ChildrenBase() {
  return (
    <Contenitore>
      <h1>Titolo</h1>
      <p>Questo è il contenuto passato come children.</p>
    </Contenitore>
  );
}

export default ChildrenBase;
