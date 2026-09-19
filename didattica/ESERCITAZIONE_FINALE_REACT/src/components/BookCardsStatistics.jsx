import StatCard from '../components/StatCard';
import {useLibreriaCtx} from '../context/LibreriaContext';

function BookCardsStatistics(){
    const{statistiche}= useLibreriaCtx();
    return(
      <section>
        <div className="statistiche">
          <StatCard numero={statistiche.totale} etichetta="Libri totali" />
          <StatCard numero={statistiche.letti} etichetta="Letti" />
          <StatCard numero={statistiche.inLettura} etichetta="In lettura" />
          <StatCard numero={statistiche.daLeggere} etichetta="Da leggere" />
          <StatCard numero={statistiche.quasiFinito} etichetta="Quasi finito"/>
        </div>
      </section>
    )
}
export default BookCardsStatistics;