// Props — dati passati dal genitore al figlio, con valori di default
// per quando il genitore non li passa.

import './PropsBase.css';

function Scheda({nome = 'Utente anonimo', eta = '--', ruolo = 'Non specificato'}) {
  return (
    <div className="scheda">
      <h2 className="scheda__nome">{nome}</h2>
      <p className="scheda__dettaglio">Età: {eta}</p>
      <p className="scheda__dettaglio">Ruolo: {ruolo}</p>
    </div>
  );
}

function PropsBase() {
  return (
    <div className="lista-schede">
      <Scheda nome="Giulia" eta={30} ruolo="Sviluppatrice" />
      <Scheda nome="Marco" eta={22} />
      <Scheda />
    </div>
  );
}

export default PropsBase;
