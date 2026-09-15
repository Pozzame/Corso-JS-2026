// JSX — regole fondamentali
// Un solo elemento radice, className al posto di class, espressioni
// tra graffe, stili inline come oggetti.
//
// Il contenitore radice è un <div> (non il Fragment <>...</>) perché
// deve poter avere una className per essere stilizzato via CSS.
// Il Fragment non genera un nodo reale nel DOM: non può avere stile.

import './JsxBase.css';

function JsxBase() {
  const nome = 'Paola';
  const eta = 25;

  return (
    <div className="jsx-esempio">
      <img className="jsx-esempio__logo" src="/react1.svg" alt="Logo" />
      <div className="jsx-esempio__contenuto">
        <h1 className="jsx-esempio__titolo">Ciao, studente!</h1>
        <p>
          {nome} ha {eta} anni. Tra dieci anni ne avrà {eta + 10}.
        </p>
        <p className="jsx-esempio__evidenza" style={{color: 'red', fontSize: '20px'}}>
          Questa riga usa uno stile inline, il resto usa classi CSS.
        </p>
        <input className="jsx-esempio__input" type="text" placeholder="Scrivi qui" />
      </div>
    </div>
  );
}

export default JsxBase;
