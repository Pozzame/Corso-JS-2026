/* ============================================
   context/LibreriaContext.jsx
   Rende disponibile lo stato della libreria (e le sue
   funzioni: aggiungiLibro, rimuoviLibro, cambiaStato,
   isInLibreria, statistiche) a qualunque componente ne
   abbia bisogno, senza passarlo a mano attraverso ogni
   livello di props.

   Prima App.jsx chiamava useLibreria() e ne passava il
   risultato "a cascata" a Home, Libreria e Cerca tramite
   props. Funzionava, ma con due difetti che si sarebbero
   visti crescendo il progetto: (1) App.jsx doveva conoscere
   e ripetere tutte le props di cui le pagine avevano
   bisogno, anche se lei stessa non le usava mai; (2) se un
   componente annidato dentro una pagina avesse avuto
   bisogno anche solo di isInLibreria, quella prop sarebbe
   dovuta passare attraverso ogni componente intermedio
   (prop drilling). Con il Context, ogni componente prende
   solo ciò che gli serve chiamando useLibreriaCtx(),
   ovunque si trovi nell'albero.
   ============================================ */
import {createContext, useContext} from 'react';
import {useLibreria} from '../hooks/useLibreria';

const LibreriaContext = createContext(null);

export function LibreriaProvider({children}) {
  const valore = useLibreria();
  return <LibreriaContext.Provider value={valore}>{children}</LibreriaContext.Provider>;
}

export function useLibreriaCtx() {
  const contesto = useContext(LibreriaContext);
  if (!contesto) {
    // Aiuta a scoprire subito l'errore più comune: usare l'hook
    // fuori da <LibreriaProvider>, invece di ricevere `undefined`
    // in silenzio e scoprirlo solo più avanti con un crash oscuro
    throw new Error('useLibreriaCtx deve essere usato dentro <LibreriaProvider>');
  }
  return contesto;
}
