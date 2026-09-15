// ESERCIZIO — rendering condizionale
// Mostra un messaggio diverso a seconda del numero di notifiche.

import { useState } from "react";
import "./comuni.css";

function RenderingCondizionaleEsercizio() {
  const [notifiche, setNotifiche] = useState(0);
  let messaggio = "";
  // TODO 1: se notifiche è 0, mostra "Nessuna notifica"
  // TODO 2: se notifiche è 1, mostra "Hai una notifica"
  // TODO 3: se notifiche è maggiore di 1, mostra "Hai {notifiche} notifiche"
  // (suggerimento: puoi usare più return condizionali, come nel file Variante)


  if (notifiche == 0) messaggio = "Nessuna notifica";
  else if (notifiche == 1) messaggio = "Hai una notifica";
  else messaggio = "Hai " + notifiche + " notifiche";


  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: notifiche</h2>
      <h3 className="titolo">Notifica: {messaggio} </h3>
      <div className="bottone-riga">
        <button className="bottone" onClick={() => setNotifiche(notifiche + 1)}>
          Aggiungi notifica
        </button>
        <button className="bottone bottone--secondario" onClick={() => setNotifiche(0)}>
          Azzera
        </button>
      </div>
    </div>
  );
}

export default RenderingCondizionaleEsercizio;