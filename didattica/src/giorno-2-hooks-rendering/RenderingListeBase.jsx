// Rendering di liste con .map(). Ogni elemento deve avere una key
// univoca. L'indice come key è accettabile solo per liste statiche;
// per liste dinamiche serve un identificatore stabile (es. id da database).

import "./comuni.css";

function RenderingListeBase() {
  const studenti = ["Luca", "Marta", "Paolo"];

  const studentiConId = [
    { id: 1, nome: "Luca" },
    { id: 2, nome: "Marta" },
    { id: 3, nome: "Paolo" },
  ];

  return (
    <div className="box">
      <h2 className="titolo">Lista statica (key = indice)</h2>
      <ul className="lista">
        {studenti.map((studente, index) => (
          <li key={index}>{studente}</li>
        ))}
      </ul>

      <h2 className="titolo" style={{ marginTop: "16px" }}>
        Stessa lista, con id stabile
      </h2>
      <ul className="lista">
        {studentiConId.map((studente) => (
          <li key={studente.id}>{studente.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderingListeBase;
