/* ============================================
   components/Nav.jsx
   Barra di navigazione con hamburger menu
   sotto i 480px.

   Nella Fase 2 il toggle del menu hamburger era
   gestito con addEventListener e classList in main.js.
   Qui lo stesso risultato si ottiene con useState:
   lo stato "aperto" determina quale classe CSS viene
   applicata, esattamente come nella Fase 2.
   ============================================ */

import {useState} from 'react';
import {NavLink} from 'react-router';

export default function Nav() {
  const [aperto, setAperto] = useState(false);

  function chiudiMenu() {
    setAperto(false);
  }

  return (
    <nav>
      {/* Bottone hamburger — visibile solo sotto 480px via CSS */}
      <button className={`hamburger${aperto ? ' aperto' : ''}`} onClick={() => setAperto(!aperto)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-inner${aperto ? ' aperto' : ''}`}>
        {/* NavLink aggiunge automaticamente la classe "active"
            al link corrispondente alla route corrente */}
        <NavLink to="/" end onClick={chiudiMenu}>
          Home
        </NavLink>
        <NavLink to="/cerca" onClick={chiudiMenu}>
          Cerca
        </NavLink>
        <NavLink to="/libreria" onClick={chiudiMenu}>
          La mia libreria
        </NavLink>
        <NavLink to="/contatti" onClick={chiudiMenu}>
          Contatti
        </NavLink>
      </div>
    </nav>
  );
}
