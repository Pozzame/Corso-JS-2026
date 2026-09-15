// ESERCIZIO — JSX
// Completa i punti contrassegnati con TODO. Il file è già impostato
// per essere copiato e completato in autonomia dopo la demo.

import './JsxEsercizio.css';

function JsxEsercizio() {
  const titolo = 'Il mio primo esercizio JSX';
  // TODO 1: crea una costante "sottotitolo" con una stringa a piacere
  const sottotitolo = 'Sottotitolo';

  return (
    <div className="esercizio">
      <h1>{titolo}</h1>

      {/* TODO 2: mostra qui il sottotitolo dentro un <p>, usando le graffe */}
      <h2>{sottotitolo}</h2>

      {/* TODO 3: aggiungi un paragrafo con uno stile inline
          (es. colore di sfondo) usando la sintassi a doppie graffe */}
      <p style={{color: 'blueviolet'}}></p>

      {/* TODO 4: aggiungi un input di tipo "text", ricordando lo slash
          di chiusura */}
      <input type="text" />
    </div>
  );
}

export default JsxEsercizio;
