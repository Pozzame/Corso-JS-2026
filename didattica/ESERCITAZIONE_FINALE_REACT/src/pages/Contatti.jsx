{/*import {useLibreriaCtx} from '../context/LibreriaContext';
import SezioneRicerca from '../components/SezioneRicerca';*/}
import SezioneHero from '../components/Hero';
import SezioneContacts from '../components/Contacts';
export default function Contatti() {
  {/*const {aggiungiLibro} = useLibreriaCtx();*/}
    const hero={
        h1:"Contatti",
        p:"Scrivi descrizione"
    }
  return (
    <main>
      {/*LEVO SEZIONE STATICA
      <section className="hero">
        <h1>Contatti</h1>
        <p>Contatti</p>
      </section>*/}
      <SezioneHero hero={hero} />
      <SezioneContacts />
      {/*<SezioneHero titolo="Contatti" descrizione="Scrivi Testo descrizione" />*/}
    </main>
  );
}
