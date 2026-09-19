/* ============================================
   pages/Home.jsx
   Pagina principale: statistiche, ricerca rapida
   e libri divisi per stato.

   La logica di ricerca è incapsulata in SezioneRicerca
   (condivisa con Cerca.jsx), i dati della libreria arrivano
   dal LibreriaContext invece che da props passate da App.
   Home aggiunge la notifica temporanea al momento
   dell'aggiunta, passando handleAggiungi come onAggiungi a
   SezioneRicerca.

   Corrisponde a index.html + main.js della Fase 2.
   ============================================ */

import {useState} from 'react';
import StatCard from '../components/StatCard';
import BookCardLibreria from '../components/BookCardLibreria';
import SezioneRicerca from '../components/SezioneRicerca';
import {useLibreriaCtx} from '../context/LibreriaContext';
import {STATI} from '../hooks/useLibreria';
import SezioneHero from '../components/Hero';

export default function Home() {
  const {libreria, statistiche, aggiungiLibro, rimuoviLibro, cambiaStato} = useLibreriaCtx();
  const [notifica, setNotifica] = useState(null);

  function handleAggiungi(libro) {
    aggiungiLibro(libro);
    setNotifica(`"${libro.titolo}" aggiunto alla libreria!`);
    setTimeout(() => setNotifica(null), 3000);
  }

  const inLettura = libreria.filter(l => l.stato === STATI.IN_LETTURA || l.stato === STATI.QUASI_FINITO);
  const daLeggere = libreria.filter(l => l.stato === STATI.DA_LEGGERE);
  const letti = libreria.filter(l => l.stato === STATI.LETTO);
  const hero={
    h1:'La tua libreria, sempre con te',
    p:"Scrivi descrizione"
  }
  return (
    <main>
      <SezioneHero hero={hero}/>

      {/* Statistiche */}
      <section>
        <h2 className="sezione-titolo">
          <img src="/img/icons/statistiche.svg" alt="" className="icona-titolo" />
          La mia libreria
        </h2>
        <div className="statistiche">
          <StatCard numero={statistiche.totale} etichetta="Libri totali" />
          <StatCard numero={statistiche.letti} etichetta="Letti" />
          <StatCard numero={statistiche.inLettura} etichetta="In lettura" />
          <StatCard numero={statistiche.daLeggere} etichetta="Da leggere" />
        </div>
      </section>

      {/* Ricerca rapida */}
      <section>
        <h2 className="sezione-titolo">
          <img src="/img/icons/ricerca.svg" alt="" className="icona-titolo" />
          Cerca un libro
        </h2>
        <SezioneRicerca onAggiungi={handleAggiungi} />
      </section>

      {/* In lettura */}
      {inLettura.length > 0 && (
        <section>
          <h2 className="sezione-titolo">
            <img src="/img/icons/in-lettura.svg" alt="" className="icona-titolo" />
            In lettura
          </h2>
          <div className="libri-griglia">
            {inLettura.map(libro => (
              <BookCardLibreria key={libro.id} libro={libro} onRimuovi={rimuoviLibro} onCambiaStato={cambiaStato} />
            ))}
          </div>
        </section>
      )}

      {/* Da leggere */}
      {daLeggere.length > 0 && (
        <section>
          <h2 className="sezione-titolo">
            <img src="/img/icons/segnalibro.svg" alt="" className="icona-titolo" />
            Da leggere
          </h2>
          <div className="libri-griglia">
            {daLeggere.map(libro => (
              <BookCardLibreria key={libro.id} libro={libro} onRimuovi={rimuoviLibro} onCambiaStato={cambiaStato} />
            ))}
          </div>
        </section>
      )}

      {/* Letti */}
      {letti.length > 0 && (
        <section>
          <h2 className="sezione-titolo">
            <img src="/img/icons/letto.svg" alt="" className="icona-titolo" />
            Letti
          </h2>
          <div className="libri-griglia">
            {letti.map(libro => (
              <BookCardLibreria key={libro.id} libro={libro} onRimuovi={rimuoviLibro} onCambiaStato={cambiaStato} />
            ))}
          </div>
        </section>
      )}

      {/* Libreria vuota */}
      {libreria.length === 0 && (
        <div className="stato-messaggio">
          <img src="/img/icons/vuota.svg" alt="" />
          <p>La tua libreria è vuota. Cerca un libro e aggiungilo!</p>
        </div>
      )}

      {/* Notifica temporanea — equivalente a mostraNotifica() in ui.js */}
      {notifica && <div className="notifica">{notifica}</div>}
    </main>
  );
}
