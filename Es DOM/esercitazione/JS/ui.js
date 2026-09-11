/* ============================================
   ui.js
   Gestione del rendering sicuro ed efficiente del DOM.
   ============================================ */

/**
 * Crea l'elemento DOM per la card del libro usando metodi sicuri contro XSS.
 */
function creaCard(datiLibro) {
  const card = document.createElement('div');
  card.className = 'libro-card';
  card.dataset.id = datiLibro.id;

  // Copertina
  const containerCopertina = document.createElement('div');
  if (datiLibro.copertina) {
    const img = document.createElement('img');
    img.src = datiLibro.copertina;
    img.alt = `Copertina di ${datiLibro.titolo}`;
    containerCopertina.appendChild(img);
  } else {
    containerCopertina.className = 'libro-copertina-placeholder';
    const img = document.createElement('img');
    img.src = 'MEDIA/libro.svg';
    img.alt = 'Copertina non disponibile';
    containerCopertina.appendChild(img);
  }

  // Dettagli Info
  const info = document.createElement('div');
  info.className = 'libro-info';

  const titolo = document.createElement('div');
  titolo.className = 'libro-titolo';
  titolo.textContent = datiLibro.titolo;

  const autore = document.createElement('div');
  autore.className = 'libro-autore';
  autore.textContent = datiLibro.autore;

  const anno = document.createElement('div');
  anno.className = 'libro-anno';
  anno.textContent = datiLibro.anno;

  info.append(titolo, autore, anno);

  // Azioni (pulsanti, select)
  const azioni = document.createElement('div');
  azioni.className = 'libro-azioni';

  const giaPresente = libreria.contiene(datiLibro);

  if (!datiLibro.stato) {
    const btnAggiungi = document.createElement('button');
    btnAggiungi.className = `btn ${!giaPresente ? 'btn-primario' : 'btn-secondario disabled'} btn-piccolo btn-aggiungi`;
    btnAggiungi.textContent = !giaPresente ? '+ Aggiungi' : 'Già inserito';
    btnAggiungi.disabled = giaPresente;

    btnAggiungi.addEventListener('click', () => {
      libreria.aggiungi(datiLibro);
      btnAggiungi.className = 'btn btn-secondario disabled btn-piccolo btn-aggiungi';
      btnAggiungi.textContent = 'Già inserito';
      btnAggiungi.disabled = true;
    });

    azioni.appendChild(btnAggiungi);
  } else {
    const spanStato = document.createElement('span');
    spanStato.className = 'libro-stato stato-da-leggere';
    spanStato.textContent = datiLibro.stato;

    const select = document.createElement('select');
    select.className = 'select-stato';

    Object.values(STATI).forEach(stato => {
      const opt = document.createElement('option');
      opt.value = stato;
      opt.textContent = stato;
      opt.selected = datiLibro.stato === stato;
      select.appendChild(opt);
    });

    select.addEventListener('change', (e) => {
      libreria.cambiaStato(datiLibro.id, e.target.value);
    });

    const btnRimuovi = document.createElement('button');
    btnRimuovi.className = 'btn btn-secondario btn-piccolo btn-rimuovi';
    btnRimuovi.textContent = 'Rimuovi';
    btnRimuovi.addEventListener('click', () => {
      libreria.rimuovi(datiLibro.id);
    });

    azioni.append(spanStato, select, btnRimuovi);
  }

  card.append(containerCopertina, info, azioni);
  return card;
}

/**
 * Mostra i risultati della ricerca.
 */
function mostraRisultati(libri, contenitore) {
  contenitore.replaceChildren();

  if (libri.length === 0) {
    const divEmpty = document.createElement('div');
    divEmpty.className = 'stato-griglia';
    divEmpty.innerHTML = `
      <img src="MEDIA/ricerca.svg" class="stato-griglia-icona" alt=""/>
      <p>Nessun risultato trovato. Prova con un altro termine.</p>
    `;
    contenitore.appendChild(divEmpty);
    return;
  }

  const fragment = document.createDocumentFragment();
  libri.forEach(libro => fragment.appendChild(creaCard(libro)));
  contenitore.appendChild(fragment);
}

/**
 * Aggiorna il contatore delle statistiche.
 */
function aggiornaStatistiche() {
  const stats = libreria.calcolaStatistiche();
  const elementi = {
    'stat-totale': stats.totale,
    'stat-letti': stats.letti,
    'stat-in-lettura': stats.inLettura,
    'stat-da-leggere': stats.daLeggere
  };

  Object.entries(elementi).forEach(([id, valore]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valore;
  });
}

/**
 * Aggiorna le sezioni della libreria dell'utente.
 */
function aggiornaSezioni() {
  const sezioni = [
    { stato: STATI.IN_LETTURA, idSezione: 'sezione-in-lettura', idGriglia: 'griglia-in-lettura' },
    { stato: STATI.DA_LEGGERE, idSezione: 'sezione-da-leggere', idGriglia: 'griglia-da-leggere' },
    { stato: STATI.LETTO, idSezione: 'sezione-letti', idGriglia: 'griglia-letti' }
  ];

  sezioni.forEach(sez => {
    const elementoSezione = document.getElementById(sez.idSezione);
    const griglia = document.getElementById(sez.idGriglia);
    if (!elementoSezione || !griglia) return;

    const libriFiltrati = libreria.filtraPerStato(sez.stato);
    griglia.replaceChildren();
    
    elementoSezione.classList.toggle('nascosto', libriFiltrati.length === 0);

    const fragment = document.createDocumentFragment();
    libriFiltrati.forEach(libro => fragment.appendChild(creaCard(libro)));
    griglia.appendChild(fragment);
  });
}