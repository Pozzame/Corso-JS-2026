// ESERCIZIO — fetch
// Carica la lista dei post da jsonplaceholder e mostra titolo e id,
// gestendo caricamento ed errore. Usa la sintassi che preferisci
// (.then o async/await).

import { useState, useEffect } from "react";

function FetchEsercizio() {
  // TODO 1: crea gli stati "post", "caricamento" (default true) ed "errore"
  const [post, setPost] = useState([]);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    // TODO 2: fai una fetch a "https://jsonplaceholder.typicode.com/posts"
    // e salva il risultato in "post", gestendo il caso di errore
    // (suggerimento: limita i risultati mostrati con .slice(0, 5)
    // per non riempire la pagina)
    const recuperaPost = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Verifica se la risposta HTTP ha avuto successo (status 200-299)
        if (!response.ok) {
          throw new Error(`Errore nella richiesta: ${response.status}`);
        }

        const data = await response.json();
        // Limitiamo i dati ai primi 5 elementi
        setPost(data.slice(0, 5));
      } catch (err) {
        setErrore(err.message);
      } finally {
        setCaricamento(false);
      }
    };

    recuperaPost();
  }, []);

  // TODO 3: gestisci i tre casi (caricamento, errore, dati pronti)

  if (caricamento) {
    return (
      <div className="box box--tratteggiato">
        <p>Caricamento in corso...</p>
      </div>
    );
  }

  if (errore) {
    return (
      <div className="box box--tratteggiato">
        <p style={{ color: 'red' }}>Si è verificato un errore: {errore}</p>
      </div>
    );
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: lista post</h2>
      {/* TODO 4: mostra qui la lista */}
      <ul>
        {post.map((item) => (
          <li key={item.id}>
            <strong>ID {item.id}:</strong> {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchEsercizio;