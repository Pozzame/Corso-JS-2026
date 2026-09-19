import {useLibreriaCtx} from '../context/LibreriaContext';
import SezioneRicerca from '../components/SezioneRicerca';
import SezioneHero from '../components/Hero';

export default function Cerca() {
  const {aggiungiLibro} = useLibreriaCtx();
  const hero={
        h1:"Cerca un Libro",
        p:"Scrivi descrizione"
    }
  return (
    <main>
      <SezioneHero hero={hero} />
      <SezioneRicerca onAggiungi={aggiungiLibro} />
    </main>
  );
}
