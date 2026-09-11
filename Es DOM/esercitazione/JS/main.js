/* ============================================
   main.js
   Gestione degli eventi di pagina ed entry point.
   ============================================ */

const TESTO_TITOLO_RISULTATI = 'Risultati';

// Selezione Elementi DOM
const formRicerca = document.querySelector('.ricerca-box');
const ricercaInput = document.getElementById('input-ricerca');
const erroreInput = ricercaInput?.nextElementSibling;
const sezioneRisultati = document.getElementById('sezione-risultati');
const titoloRisultati = document.getElementById('titolo-risultati');
const esitoParagrafo = document.getElementById('esito');
const grigliaCerca = document.getElementById('griglia-risultati');
const btnChiudiRisultati = document.getElementById('btn-chiudi-risultati');

// Inizializzazione UI
document.addEventListener('DOMContentLoaded', () => {
  libreria.aggiornaUI();
});

// Event Listener unico: l'evento 'submit' del form intercetta nativamente sia il pulsante che il tasto ENTER.
if (formRicerca) {
  formRicerca.addEventListener('submit', (e) => {
    e.preventDefault();
    avviaRicerca();
  });
}

/**
 * Gestisce l'avvio della ricerca e la risposta dell'API.
 */
async function avviaRicerca() {
  if (esitoParagrafo) esitoParagrafo.textContent = '';
  if (erroreInput) erroreInput.textContent = '';

  const testoRicerca = ricercaInput.value.trim();

  if (!testoRicerca) {
    if (erroreInput) erroreInput.textContent = 'Campo obbligatorio';
    return;
  }

  sezioneRisultati.classList.remove('nascosto');

  try {
    const libri = await cercaLibri(testoRicerca);
    
    if (titoloRisultati) {
      titoloRisultati.textContent = `${TESTO_TITOLO_RISULTATI} per "${testoRicerca}" (${libri.length})`;
    }
    
    mostraRisultati(libri, grigliaCerca);

  } catch (error) {
    // Gestione differenziata se la richiesta è stata annullata appositamente
    if (error.name === 'AbortError') {
      return; 
    }

    if (esitoParagrafo) {
      esitoParagrafo.textContent = "Si è verificato un errore. Riprova più tardi.";
    }
    console.error('Errore durante la ricerca:', error);
  }
}

// Reset e chiusura della sezione risultati
if (btnChiudiRisultati) {
  btnChiudiRisultati.addEventListener('click', () => {
    grigliaCerca.replaceChildren();
    if (titoloRisultati) titoloRisultati.textContent = TESTO_TITOLO_RISULTATI;
    ricercaInput.value = '';
    if (erroreInput) erroreInput.textContent = '';
    sezioneRisultati.classList.add('nascosto');
  });
}