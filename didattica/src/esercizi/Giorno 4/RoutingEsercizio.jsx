// ESERCIZIO — routing
// Elenco di articoli con link a una pagina di dettaglio (useParams),
// e un bottone "Torna indietro" che usa useNavigate.

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router";

const articoli = [
  { id: 1, titolo: "Introduzione a JSX" },
  { id: 2, titolo: "I componenti" },
  { id: 3, titolo: "Le props" },
];

function ElencoArticoli() {
  return (
    <div className="box">
      <h2 className="titolo">Articoli</h2>
      {/* TODO 1: mostra un Link per ogni articolo verso /articoli/:id */}
      <ul>
        {articoli.map((art) => (
          <li key={art.id}>
            <Link to={`/articoli/${art.id}`}>{art.titolo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DettaglioArticolo() {
  // TODO 2: leggi l'id con useParams e trova l'articolo corrispondente
  const { id } = useParams();
  const articolo = articoli.find((a) => a.id === Number(id));

  // TODO 3: crea "navigate" con useNavigate
  const navigate = useNavigate();

  if (!articolo) {
    return (
      <div className="box">
        <h2 className="titolo">Articolo non trovato</h2>
        <button className="bottone" onClick={() => navigate("/")}>
          Torna alla home
        </button>
      </div>
    );
  }

  return (
    <div className="box">
      {/* TODO 4: mostra il titolo dell'articolo trovato */}
      <h2 className="titolo">{articolo.titolo}, ID: {articolo.id}</h2>

      {/* TODO 5: bottone "Torna indietro" che chiama navigate("/") */}
      <div className="bottone-riga" style={{ marginTop: '15px' }}>
        <button className="bottone" onClick={() => navigate('/')}>
          Torna indietro
        </button>
      </div>
    </div>
  );
}

function RoutingEsercizio() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElencoArticoli />} />
        <Route path="/articoli/:id" element={<DettaglioArticolo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutingEsercizio;
