// ESERCIZIO — invio dati (POST)
// Scrivi la funzione di servizio "creaCommento" e usala in un form
// che invia un commento con nome e testo.

// TODO 1: scrivi qui la funzione async "creaCommento(dati)" che fa
// una POST verso "https://jsonplaceholder.typicode.com/comments",
// con headers Content-Type application/json e body JSON.stringify(dati)

async function creaCommento(dati) {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dati),
  });
console.log(dati)
  if (!response.ok) {
    throw new Error(`Errore durante l'invio del commento: ${response.status}`);
  }

  return await response.json();
}

import {useState} from 'react';

function PostEsercizio() {
  const [nome, setNome] = useState('');
  const [testo, setTesto] = useState('');
  const [inviando, setInviando] = useState(false);
  const [esito, setEsito] = useState(null);
  const [errore, setErrore] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // TODO 2: chiama creaCommento con { name: nome, body: testo, email: "test@test.com" }
    // gestendo lo stato "inviando" e un eventuale errore
    setInviando(true);
    setErrore(null);
    setEsito(null);

    try {
      const nuovoCommento = await creaCommento({
        name: nome,
        body: testo,
        email: 'test@test.com',
      });

      setEsito(`Commento inviato con successo! ID generato: ${nuovoCommento.id}`);
      
      // Reset dei campi del form dopo un invio riuscito
      setNome('');
      setTesto('');
    } catch (err) {
      setErrore(err.message);
    } finally {
      setInviando(false);
    }
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: nuovo commento</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" disabled={inviando} />
        <input className="input" value={testo} onChange={e => setTesto(e.target.value)} placeholder="Commento" disabled={inviando} />
        <div className="bottone-riga">
          <button className="bottone" type="submit" disabled={inviando}>
            {inviando ? 'Invio in corso...' : 'Invia commento'}
          </button>
        </div>
      </form>

      {esito && <p style={{ color: 'green', marginTop: '10px' }}>{esito}</p>}
      {errore && <p style={{ color: 'red', marginTop: '10px' }}>{errore}</p>}
    </div>
  );
}

export default PostEsercizio;
