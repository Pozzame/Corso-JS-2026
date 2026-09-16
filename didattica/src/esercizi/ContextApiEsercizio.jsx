// ESERCIZIO — Context API
// Crea un LinguaContext che condivide la lingua corrente ("it" o "en")
// tra due componenti annidati, senza passarla come prop.

import { createContext, useContext, useState } from "react";
import "./comuni.css";

// TODO 1: crea LinguaContext con createContext("it")

/* const LinguaContext = createContext("it"); */
const LinguaContext = createContext({
  lingua: "it",
  setLingua: () => {}
});

function Saluto() {
  // TODO 2: leggi la lingua dal context con useContext
  // TODO 3: mostra "Ciao!" se lingua è "it", "Hello!" se è "en"
  return <p className="sottotitolo">{useContext(LinguaContext).lingua == "it" ? "Ciao" : "Hello"}</p>;
}

function Selettore() {
  // TODO 4: leggi lingua e setLingua dal context
  const { lingua, setLingua } = useContext(LinguaContext);
  // TODO 5: due bottoni per impostare "it" oppure "en"
  return <div className="bottone-riga">
    <button
      disabled={lingua === "it"}
      onClick={() => setLingua("it")}
    >
      Italiano
    </button>
    <button
      disabled={lingua === "en"}
      onClick={() => setLingua("en")}
    >
      English
    </button></div>;
}

function ContextApiEsercizio() {
  const [lingua, setLingua] = useState("it");

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: lingua condivisa</h2>
      {/* TODO 6: avvolgi Saluto e Selettore nel Provider,
          passando { lingua, setLingua } come value */}
      <LinguaContext.Provider value={{ lingua, setLingua }}>
        <Saluto />
        <Selettore />
      </LinguaContext.Provider>
    </div>
  );
}

export default ContextApiEsercizio;
