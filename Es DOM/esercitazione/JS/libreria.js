/* ============================================
   libreria.js
   Gestisce la persistenza e lo stato locale dei libri.
   ============================================ */

const STATI = Object.freeze({
  DA_LEGGERE: 'da leggere',
  IN_LETTURA: 'in lettura',
  LETTO: 'letto'
});

const LS_KEY = 'bookShelf';

/**
 * Costruttore dell'entità Libro.
 */
function Libro(dati) {
  this.id = dati.id;
  this.titolo = dati.titolo;
  this.autore = dati.autore;
  this.copertina = dati.copertina;
  this.anno = dati.anno;
  this.stato = dati.stato || STATI.DA_LEGGERE;
}

/**
 * Gestore della collezione di libri con salvataggio in LocalStorage.
 */
function Libreria() {
  this.libri = [];
  this.carica();
}

Libreria.prototype.carica = function () {
  try {
    const rawData = localStorage.getItem(LS_KEY);
    this.libri = rawData ? JSON.parse(rawData).map(item => new Libro(item)) : [];
  } catch (e) {
    console.error('Errore nel parsing del LocalStorage, ripristino libreria vuota:', e);
    this.libri = [];
  }
};

Libreria.prototype.getLibri = function () {
  return this.libri;
};

Libreria.prototype.contiene = function (datiLibro) {
  return this.libri.some(libro => libro.id === datiLibro.id);
};

Libreria.prototype.aggiungi = function (datiLibro) {
  if (this.contiene(datiLibro)) return;
  this.libri.push(new Libro(datiLibro));
  this.salvaESincronizza();
};

Libreria.prototype.cambiaStato = function (id, nuovoStato) {
  const libro = this.libri.find(l => l.id === id);
  if (libro) {
    libro.stato = nuovoStato;
    this.salvaESincronizza();
  }
};

Libreria.prototype.filtraPerStato = function (stato) {
  return this.libri.filter(libro => libro.stato === stato);
};

Libreria.prototype.rimuovi = function (id) {
  this.libri = this.libri.filter(libro => libro.id !== id);
  this.salvaESincronizza();
};

Libreria.prototype.salvaESincronizza = function () {
  this.salva();
  this.aggiornaUI();
};

Libreria.prototype.aggiornaUI = function () {
  if (typeof aggiornaStatistiche === 'function') aggiornaStatistiche();
  if (typeof aggiornaSezioni === 'function') aggiornaSezioni();
};

Libreria.prototype.calcolaStatistiche = function () {
  return {
    totale: this.libri.length,
    daLeggere: this.filtraPerStato(STATI.DA_LEGGERE).length,
    letti: this.filtraPerStato(STATI.LETTO).length,
    inLettura: this.filtraPerStato(STATI.IN_LETTURA).length
  };
};

Libreria.prototype.salva = function () {
  localStorage.setItem(LS_KEY, JSON.stringify(this.libri));
};

// Istanza globale della libreria
const libreria = new Libreria();