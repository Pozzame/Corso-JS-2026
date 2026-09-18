import { useState } from "react";
import useTitolo from "../hooks/useTitolo";

function Contatti() {
  useTitolo("Contatti | La Mia App");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ nome, password, email });
  }

  return (
    <div>
      <h2>Contatti</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label htmlFor="nome">Nome</label>
          <br />
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label htmlFor="nome">Password</label>
          <br />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default Contatti;