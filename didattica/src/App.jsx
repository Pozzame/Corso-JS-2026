import Base from './giorno-1-fondamenta/JsxBase.jsx';
// import ComponentiBase from './giorno-1-fondamenta/ComponentiBase.jsx';
import { Header, Footer, Benvenuto } from './giorno-1-fondamenta/ComponentiBase.jsx';
import PropsBase from './giorno-1-fondamenta/PropsBase.jsx';
import { ComponentiComposizione, Card } from './giorno-1-fondamenta/ComponentiComposizione.jsx';
import UseStateBase from './giorno-2-hooks-rendering/UseEffectBase.jsx';
import UseStateOggettiBase from './giorno-2-hooks-rendering/UseStateOggettiBase.jsx';
import UseStateOggettiVariante from './giorno-2-hooks-rendering/UseStateOggettiVariante.jsx';
import UseEffectBase from './giorno-2-hooks-rendering/UseEffectBase.jsx';
import UseRefBase from './giorno-2-hooks-rendering/UseRefBase.jsx';
import RenderingCondizionaleEsercizio from './giorno-2-hooks-rendering/RenderingCondizionaleEsercizio.jsx';
import RenderingListeEsercizio from './giorno-2-hooks-rendering/RenderingListeEsercizio.jsx';
import UseEffectEsercizio from './giorno-2-hooks-rendering/UseEffectEsercizio.jsx';
import UseMemoCallbackEsercizio from './giorno-2-hooks-rendering/UseMemoCallbackEsercizio.jsx';

function App() {
  return (
    <>
      <Header />
      {/*  <Card>
        <p>Quanto mi piace il bordo della card</p>
      </Card>
      <ComponentiComposizione /> */}
      {/* <UseStateOggettiBase /> */}
      {/* <UseStateOggettiVariante /> */}
      {/* <UseEffectBase /> */}
      {/* <RenderingCondizionaleEsercizio /> */}
      {/* <RenderingListeEsercizio /> */}
      {/* <UseEffectEsercizio /> */}
      <UseMemoCallbackEsercizio />
      <Footer />
    </>
  );
}

export default App;
