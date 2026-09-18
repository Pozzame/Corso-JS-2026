import useTitolo from "../hooks/useTitolo";

function Home() {
  useTitolo("Home | La Mia App");

  return (
    <div>
      <h2>Home</h2>
      <p>Benvenuto nella pagina principale dell'applicazione in React.</p>
    </div>
  );
}

export default Home;