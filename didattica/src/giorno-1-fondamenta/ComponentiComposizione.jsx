// Componenti — composizione su più livelli.
// Card è composto da CardTitolo e CardDescrizione: componenti piccoli,
// riusati più volte per costruire una lista di elementi ripetuti.

import './ComponentiComposizione.css';

function CardTitolo({children}) {
  return <h3 className="card__titolo">{children}</h3>;
}

function CardDescrizione({children}) {
  return <p className="card__descrizione">{children}</p>;
}

function Card({children}) {
  return <div className="card">{children}</div>;
}

function ComponentiComposizione() {
  return (
    <div className="lista-card">
      <Card>
        <CardTitolo>Modulo JavaScript</CardTitolo>
        <CardDescrizione>Variabili, funzioni, array, oggetti.</CardDescrizione>
      </Card>

      <Card>
        <CardTitolo>Modulo React</CardTitolo>
        <CardDescrizione>Componenti, props, hooks, routing.</CardDescrizione>
      </Card>

      <Card>
        <CardTitolo>Modulo Node.js</CardTitolo>
        <CardDescrizione>Express, autenticazione, database.</CardDescrizione>
      </Card>
    </div>
  );
}

export {ComponentiComposizione, Card};
