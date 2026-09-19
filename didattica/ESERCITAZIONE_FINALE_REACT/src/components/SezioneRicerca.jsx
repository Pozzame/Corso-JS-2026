/* ============================================
   components/SezioneRicerca.jsx
   Blocco "cerca un libro + mostra i risultati", usato sia
   in Home (ricerca rapida) sia in Cerca (pagina dedicata).

   Prima Home.jsx e Cerca.jsx chiamavano ciascuna la propria
   useRicerca() e ripetevano quasi identica la stessa coppia
   SearchBar + RisultatiRicerca. Le due ricerche restano
   intenzionalmente indipendenti (cercare in Home non tocca
   i risultati già mostrati in Cerca, sono due contesti
   d'uso diversi), ma il codice che le fa funzionare non
   deve più essere scritto due volte identico.

   `onAggiungi` resta personalizzabile da chi usa il
   componente: Home lo usa anche per mostrare una notifica
   temporanea, Cerca no.
   ============================================ */
import {useRicerca} from '../hooks/useRicerca';
import {useLibreriaCtx} from '../context/LibreriaContext';
import SearchBar from './SearchBar';
import RisultatiRicerca from './RisultatiRicerca';

export default function SezioneRicerca({onAggiungi}) {
  const {isInLibreria} = useLibreriaCtx();
  const {risultati, inCaricamento, errore, ultimaQuery, handleCerca, handleChiudiRisultati} = useRicerca();

  return (
    <>
      <SearchBar onCerca={handleCerca} inCaricamento={inCaricamento} />
      <RisultatiRicerca
        risultati={risultati}
        inCaricamento={inCaricamento}
        errore={errore}
        ultimaQuery={ultimaQuery}
        onChiudi={handleChiudiRisultati}
        onAggiungi={onAggiungi}
        isInLibreria={isInLibreria}
      />
    </>
  );
}
