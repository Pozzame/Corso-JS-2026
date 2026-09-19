import {Routes, Route} from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Cerca from './pages/Cerca.jsx';
import Home from './pages/Home.jsx';
import Contatti from './pages/Contatti.jsx';
import Libreria from './pages/Libreria.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Routes>
        <Route path="/cerca" element={<Cerca />} />
        <Route path="/" element={<Home />} />
        <Route path="/libreria" element={<Libreria /> } />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
