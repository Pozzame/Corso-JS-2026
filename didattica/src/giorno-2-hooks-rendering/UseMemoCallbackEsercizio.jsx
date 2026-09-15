// ESERCIZIO — useMemo
// Filtra una lista di numeri mostrando solo quelli pari, ricalcolando
// il filtro solo quando la lista o la soglia cambiano.

import { useState, useMemo } from "react";
import "./comuni.css";

function UseMemoCallbackEsercizio() {
  const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // TODO 1: crea uno stato "soloPari", booleano, inizialmente false

  // TODO 2: usa useMemo per calcolare "numeriFiltrati": se soloPari
  // è true, restituisce solo i numeri pari, altrimenti tutti i numeri
  // (suggerimento: numero % 2 === 0). Ricorda l'array di dipendenze

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: filtro numeri pari</h2>
      <button className="bottone">Mostra solo pari</button>

      {/* TODO 3: mostra numeriFiltrati con .map() */}
    </div>
  );
}

export default UseMemoCallbackEsercizio;
