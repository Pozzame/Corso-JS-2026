import useTitolo from "../hooks/useTitolo";

function ChiSiamo() {
  useTitolo("Chi Siamo | La Mia App");

  return (
    <div>
      <h2>Chi Siamo</h2>
      <p>
        Obiettivo Creare una piccola applicazione React con più pagine
        navigabili tramite React Router, organizzata secondo la struttura
        standard (components / pages / hooks) e con CSS Modules.
      </p>
    </div>
  );
}

export default ChiSiamo;
