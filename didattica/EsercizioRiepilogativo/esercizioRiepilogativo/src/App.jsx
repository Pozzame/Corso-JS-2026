import "./App.css";

import { Routes, Route } from 'react-router';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import NonTrovata from "./pages/NonTrovata";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NonTrovata />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;