import useTitolo from "../hooks/useTitolo";

function NonTrovata() {
  useTitolo("Pagina non trovata | La Mia App");

  return (
    <div>
      <h2>Pagina non trovata</h2>
      <p>La pagina che stai cercando non esiste.</p>
    </div>
  );
}

export default NonTrovata;
