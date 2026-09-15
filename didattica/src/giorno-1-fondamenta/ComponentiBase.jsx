// Componenti — definizione e composizione di base.
// Nomi dei componenti sempre con la lettera maiuscola: è così che
// React distingue un componente personalizzato (<Header />) da un
// tag HTML nativo (<header>).

import './ComponentiBase.css';

function Header() {
  return (
    <header className="pagina__header">
      <h1>Il mio sito</h1>
    </header>
  );
}

function Benvenuto() {
  return <h2 className="pagina__benvenuto">Ciao, studente!</h2>;
}

function Footer() {
  return (
    <footer className="pagina__footer">
      <p>© 2026</p>
    </footer>
  );
}

function ComponentiBase() {
  let nome = 'Calidoso';
  return (
    <div className="pagina">
      <Header />
      <main className="pagina__main">
        <Benvenuto />
        {nome}
        <p>Contenuto principale</p>
      </main>
      <Footer />
    </div>
  );
}

export {Header, Footer, Benvenuto};
