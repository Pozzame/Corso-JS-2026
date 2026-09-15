// Il costo reale di un calcolo pesante, con e senza useMemo.
// Cambiando SOLO "contatoreIndipendente" (che non c'entra nulla col
// filtro), la versione senza useMemo ricalcola comunque tutto: si
// vede in console quante volte "calcolaPesante" viene eseguita.

import { useState, useMemo } from "react";
import "./comuni.css";

function calcolaPesante(numero) {
  console.log("Calcolo pesante in esecuzione per:", numero);
  let risultato = 0;
  for (let i = 0; i < 1000000; i++) {
    risultato += numero;
  }
  return risultato;
}

function UseMemoCallbackVariante() {
  const [numero, setNumero] = useState(1);
  const [contatoreIndipendente, setContatoreIndipendente] = useState(0);

  // Con useMemo: ricalcola SOLO quando "numero" cambia
  const risultato = useMemo(() => calcolaPesante(numero), [numero]);

  return (
    <div className="box">
      <h2 className="titolo">useMemo in azione</h2>
      <p className="sottotitolo">Risultato: {risultato}</p>

      <div className="bottone-riga">
        <button className="bottone" onClick={() => setNumero(numero + 1)}>
          Cambia numero ({numero})
        </button>
        <button
          className="bottone bottone--secondario"
          onClick={() => setContatoreIndipendente(contatoreIndipendente + 1)}
        >
          Contatore indipendente ({contatoreIndipendente})
        </button>
      </div>

      <p className="sottotitolo" style={{ marginTop: "12px" }}>
        Apri la console: cliccando "Contatore indipendente" il
        calcolo pesante NON viene rieseguito, perché "numero" non è
        cambiato.
      </p>
    </div>
  );
}

export default UseMemoCallbackVariante;
