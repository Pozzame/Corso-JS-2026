// Esercizio B - Rubrica contatti con ricerca
// Soluzione: componente unico, filtro derivato dallo state di ricerca
// (nessuno state aggiuntivo per la lista filtrata: si ricalcola
// ad ogni render a partire da "contatti" e "ricerca").
//
// Lo stile è incluso in un tag <style> dentro il componente stesso
// (non essendoci un file .css a parte in questo esercizio): React lo
// inserisce nel punto in cui compare nel JSX, ma essendo regole CSS
// normali funzionano comunque su tutta la pagina.

import { useState, useRef, useEffect } from "react";

export default function RubricaContatti() {
  const [contatti, setContatti] = useState([]);
  const [nome, setNome] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [ricerca, setRicerca] = useState("");

  const inputNomeRef = useRef(null);

  useEffect(() => {
    console.log(`Numero di contatti in rubrica: ${contatti.length}`);
  }, [contatti]);

  function handleSubmit(event) {
    event.preventDefault();

    if (nome.trim() === "") {
      return;
    }

    const nuovoContatto = {
      id: Date.now(),
      nome: nome.trim(),
      telefono: telefono.trim(),
      email: email.trim(),
    };

    setContatti([...contatti, nuovoContatto]);
    setNome("");
    setTelefono("");
    setEmail("");
    inputNomeRef.current.focus();
  }

  function handleRimuovi(id) {
    setContatti(contatti.filter((contatto) => contatto.id !== id));
  }

  // Filtro + ordinamento derivati: niente state extra, si ricalcolano
  // ad ogni render a partire da contatti e ricerca.
  const contattiFiltrati = contatti
    .filter((contatto) =>
      contatto.nome.toLowerCase().includes(ricerca.trim().toLowerCase()),
    )
    .sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div className="rubrica">
      <style>{`
        .rubrica {
          max-width: 480px;
          margin: 2rem auto;
          padding: 1.5rem;
          font-family: system-ui, sans-serif;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fafafa;
        }
        .rubrica h1 {
          margin-top: 0;
          font-size: 1.4rem;
          color: #222;
        }
        .rubrica form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .rubrica input {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 0.95rem;
        }
        .rubrica input:focus {
          outline: none;
          border-color: #2563eb;
        }
        .rubrica button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          background-color: #2563eb;
          color: #fff;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .rubrica button:hover {
          background-color: #1d4ed8;
        }
        .rubrica .campo-ricerca {
          margin-bottom: 1.25rem;
        }
        .rubrica .campo-ricerca label {
          display: block;
          margin-bottom: 0.25rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: #444;
        }
        .rubrica .campo-ricerca input {
          width: 100%;
          box-sizing: border-box;
        }
        .rubrica ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .rubrica li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }
        .rubrica li button {
          background-color: #dc2626;
          flex-shrink: 0;
        }
        .rubrica li button:hover {
          background-color: #b91c1c;
        }
        .rubrica .vuoto {
          color: #777;
          font-style: italic;
        }
      `}</style>

      <h1>Rubrica contatti</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputNomeRef}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Telefono"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Aggiungi contatto</button>
      </form>

      <div className="campo-ricerca">
        <label
          htmlFor="ricerca"
          onClick={() => {
            // Se c'è già del testo, il click sulla label lo cancella
            // (oltre a portare il focus sul campo, comportamento di
            // default di una label collegata a un input)
            if (ricerca !== "") setRicerca("");
          }}
          style={{ cursor: ricerca !== "" ? "pointer" : "default" }}
        >
          {ricerca !== "" ? "Cancella ricerca" : "Cerca per nome"}
        </label>
        <input
          id="ricerca"
          type="text"
          value={ricerca}
          onChange={(e) => setRicerca(e.target.value)}
          placeholder="Cerca per nome..."
        />
      </div>

      {contattiFiltrati.length === 0 ? (
        <p className="vuoto">Nessun contatto trovato.</p>
      ) : (
        <ul>
          {contattiFiltrati.map((contatto) => (
            <li key={contatto.id}>
              <span>
                <strong>{contatto.nome}</strong> — {contatto.telefono} —{" "}
                {contatto.email}
              </span>
              <button onClick={() => handleRimuovi(contatto.id)}>
                Rimuovi
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
