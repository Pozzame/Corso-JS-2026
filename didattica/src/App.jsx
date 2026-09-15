import Base from './giorno-1-fondamenta/JsxBase.jsx';
// import ComponentiBase from './giorno-1-fondamenta/ComponentiBase.jsx';
import {Header, Footer, Benvenuto} from './giorno-1-fondamenta/ComponentiBase.jsx';
import PropsBase from './giorno-1-fondamenta/PropsBase.jsx';
import {ComponentiComposizione, Card} from './giorno-1-fondamenta/ComponentiComposizione.jsx';

function App() {
  return (
    <>
      <Header />
      <Card>
        <p>Quanto mi piace il bordo della card</p>
      </Card>
      <ComponentiComposizione />
      <Footer />
    </>
  );
}

export default App;
