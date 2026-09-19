/* ============================================
   services/api.js
   Gestisce tutte le chiamate a Open Library API
   Documentazione: https://openlibrary.org/developers/api

   Nella Fase 2 (vanilla JS) la cancellazione delle
   ricerche obsolete era gestita con un AbortController
   tenuto come variabile di modulo dentro api.js stesso.
   Qui il controller NON vive più qui: viene creato da
   chi chiama cercaLibri (il hook useRicerca) e passato
   come `signal`. Un controller globale in questo file
   andrebbe in conflitto se due componenti (es. Home e
   Cerca) cercano contemporaneamente, perché condividerebbero
   la stessa variabile e si annullerebbero a vicenda anche
   quando non dovrebbero.
   ============================================ */
const API_BASE_URL = 'https://openlibrary.org';
const RESULTS_LIMIT = 10;

export async function cercaLibri(query, {signal} = {}) {
  const queryUrl = encodeURIComponent(query); // trasforma l'input dell'utente in una forma adatta a una url (es. sostituisce gli spazi con %20)
  const url = `${API_BASE_URL}/search.json?q=${queryUrl}&limit=${RESULTS_LIMIT}&lang=ita`;

  const risposta = await fetch(url, {signal});
  if (!risposta.ok) {
    throw new Error('Errore API ' + risposta.status);
  }

  const dati = await risposta.json();

  // Gestione sicura: se per qualche motivo `docs` non è un array, non rompiamo la ricerca
  const libriDocs = Array.isArray(dati.docs) ? dati.docs : [];
  return libriDocs.map(normalizzaLibro);
}

function normalizzaLibro(libro) {
  return {
    id: libro.key,
    titolo: libro.title || 'Titolo sconosciuto',
    // Accesso sicuro all'array autori: non tutti i risultati di Open Library
    // hanno author_name, e libro.author_name[0] senza "?." fa crashare la ricerca
    autore: libro.author_name?.[0] || 'Autore sconosciuto',
    anno: libro.first_publish_year || '-',
    copertina: libro.cover_i ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` : null
  };
}
