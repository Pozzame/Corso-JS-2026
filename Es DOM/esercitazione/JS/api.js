/* ============================================
   api.js
   Gestisce le chiamate all'API di Open Library
   con supporto al cancel via AbortController.
   ============================================ */

const API_BASE_URL = 'https://openlibrary.org';
const RESULTS_LIMIT = 10;

// Istanza per tracciare e annullare le chiamate fetch pendenti
let controllerRicerca = null;

/**
 * Effettua la ricerca di libri su Open Library.
 * @param {string} query - Termine da cercare.
 * @returns {Promise<Array>} Lista di libri normalizzati.
 */
async function cercaLibri(query) {
  // Se c'è una richiesta ancora in corso, la annulliamo
  if (controllerRicerca) {
    controllerRicerca.abort();
  }

  // Creiamo un nuovo controller per la richiesta corrente
  controllerRicerca = new AbortController();
  const { signal } = controllerRicerca;

  const queryUrl = encodeURIComponent(query);
  const url = `${API_BASE_URL}/search.json?q=${queryUrl}&limit=${RESULTS_LIMIT}&lang=ita`;

  try {
    const risposta = await fetch(url, { signal });

    if (!risposta.ok) {
      throw new Error(`Errore API: ${risposta.status}`);
    }

    const dati = await risposta.json();
    
    // Gestione sicura dell'array dei risultati
    const libriDocs = Array.isArray(dati.docs) ? dati.docs : [];
    return libriDocs.map(normalizzaLibro);

  } catch (error) {
    // Se l'errore è dovuto all'annullamento intenzionale della fetch, lo rilanciamo per gestirlo a monte
    if (error.name === 'AbortError') {
      console.log('Ricerca precedente annullata.');
    }
    throw error;
  } finally {
    // Resettiamo il controller una volta completata la richiesta
    controllerRicerca = null;
  }
}

/**
 * Normalizza l'oggetto libro restituito dall'API.
 * @param {Object} libro - Oggetto grezzo dall'API.
 * @returns {Object} Oggetto libro uniformato.
 */
function normalizzaLibro(libro) {
  return {
    id: libro.key,
    titolo: libro.title || 'Titolo sconosciuto',
    // Accesso sicuro all'array autori tramite optional chaining (?.)
    autore: libro.author_name?.[0] || 'Autore sconosciuto',
    anno: libro.first_publish_year || '-',
    copertina: libro.cover_i 
      ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg` 
      : null
  };
}