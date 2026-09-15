// ESERCIZIO — Props
// Completa i TODO per creare un componente "Prodotto" che riceve
// props e le mostra, con valori di default.

import "./PropsEsercizio.css";

// TODO 1: crea il componente Prodotto che riceve le props
// "nome", "prezzo" e "disponibile" (default: disponibile = true)

// TODO 2: dentro Prodotto, mostra nome e prezzo, e un testo diverso
// a seconda che "disponibile" sia true o false (puoi usare il
// ternario, come visto nella dispensa)

function PropsEsercizio() {
  return (
    <div className="esercizio-props">
      <h2>Esercizio props</h2>

      {/* TODO 3: usa qui il componente Prodotto tre volte,
          con dati diversi, lasciando che almeno una volta
          il valore di default di "disponibile" venga usato */}
    </div>
  );
}

export default PropsEsercizio;
