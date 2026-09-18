// ESERCIZIO — hook personalizzato
// Estendi l'idea di useFetch scrivendo "useContatore", un hook che
// gestisce uno stato numerico con funzioni incrementa/decrementa,
// riutilizzabile in più componenti.

import { useState } from "react";
import "../comuni.css";

// TODO 1: scrivi la funzione useContatore(valoreIniziale) che
// restituisce { valore, incrementa, decrementa }, usando useState
// internamente
function useContatore(valoreIniziale = 0) {
  const [valore, setValore] = useState(valoreIniziale);

  const incrementa = () => setValore((prev) => prev + 1);
  const decrementa = () => setValore((prev) => prev - 1);

  return { valore, incrementa, decrementa };
}

function PrimoContatore() {
  // TODO 2: usa qui useContatore(0)
  const { valore, incrementa, decrementa } = useContatore(0);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Primo contatore</h2>
      {/* TODO 3: mostra il valore e due bottoni collegati a
          incrementa/decrementa */}
          <p>Valore attuale: <strong>{valore}</strong></p>
          <div className="bottone-riga">
        <button className="bottone" onClick={decrementa}>-</button>
        <button className="bottone" onClick={incrementa}>+</button>
      </div>
    </div>
  );
}

function SecondoContatore() {
  // TODO 4: usa di nuovo useContatore, ma con valore iniziale 10,
  // per dimostrare che ogni componente ha il proprio stato indipendente
  const { valore, incrementa, decrementa } = useContatore(10);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Secondo contatore</h2>
          <p>Valore attuale: <strong>{valore}</strong></p>
          <div className="bottone-riga">
        <button className="bottone" onClick={decrementa}>-</button>
        <button className="bottone" onClick={incrementa}>+</button>
      </div>
    </div>
  );
}

function UseFetchEsercizio() {
  return (
    <div>
      <PrimoContatore />
      <SecondoContatore />
    </div>
  );
}

export default UseFetchEsercizio;
