// Lista dinamica: qui si vede perché l'indice come key è un problema.
// Rimuovendo un elemento in mezzo alla lista, con l'indice come key
// React può confondere quale riga corrisponde a quale dato; con un
// id stabile no.

import { useState } from "react";
import "./comuni.css";

let prossimoId = 4;

function RenderingListeVariante() {
  const [studenti, setStudenti] = useState([
    { id: 1, nome: "Luca" },
    { id: 2, nome: "Marta" },
    { id: 3, nome: "Paolo" },
  ]);

  function handleAggiungi() {
    setStudenti([...studenti, { id: prossimoId, nome: `Studente ${prossimoId}` }]);
    prossimoId++;
  }

  function handleRimuovi(id) {
    setStudenti(studenti.filter((s) => s.id !== id));
  }

  return (
    <div className="box">
      <h2 className="titolo">Lista dinamica con id stabile</h2>
      <ul className="lista">
        {studenti.map((studente) => (
          <li key={studente.id}>
            {studente.nome}
            <button className="bottone bottone--secondario" onClick={() => handleRimuovi(studente.id)}>
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
      <div className="bottone-riga">
        <button className="bottone" onClick={handleAggiungi}>
          Aggiungi studente
        </button>
      </div>
    </div>
  );
}

export default RenderingListeVariante;
