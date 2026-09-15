// ESERCIZIO — rendering di liste
// Costruisci una lista della spesa con aggiunta e rimozione di
// elementi, usando un id stabile come key.

import { useState } from "react";
import "./comuni.css";

let prossimoId = 1;
/* let articoli = []; */
function RenderingListeEsercizio() {

  // TODO 1: crea uno stato "articoli", array di oggetti { id, nome },
  // inizialmente vuoto
  const [articoli, setArticoli] = useState([]);
  const [testo, setTesto] = useState("");

  function handleAggiungi() {
    if (testo.trim() === "") return;
    setArticoli([...articoli, { id: prossimoId, nome: testo}])
    /* articoli.push({ id: prossimoId, nome: testo }); */
    prossimoId++;
    setTesto("");
    /* console.log(articoli); */
    // TODO 2: aggiungi un nuovo oggetto { id: prossimoId, nome: testo }
    // all'array "articoli", poi incrementa prossimoId e svuota "testo"
  }

  function handleRimuovi(id) {
    // TODO 3: rimuovi dall'array l'articolo con questo id
    setArticoli(articoli.filter((a) => a.id !== id));
    /* articoli = articoli.filter((s) => s.id !== id); */
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: lista della spesa</h2>
      <div className="bottone-riga">
        <input
          className="input"
          value={testo}
          onChange={(e) => setTesto(e.target.value)}
          placeholder="Nuovo articolo"
        />
        <button className="bottone" onClick={handleAggiungi}>
          Aggiungi
        </button>
      </div>
      <ul className="lista">
        {articoli.map((articolo) => (
          <li key={articolo.id}>
            {articolo.nome}
            <button className="bottone bottone--secondario" onClick={() => handleRimuovi(articolo.id)}>
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
      {/* TODO 4: mostra qui "articoli" con .map(), key = articolo.id,
          e un bottone "Rimuovi" per ciascuno che chiama handleRimuovi */}
    </div>
  );
}

export default RenderingListeEsercizio;
