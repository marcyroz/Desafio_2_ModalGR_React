import React from "react";
import { useState } from "react";
import { Container, Form } from "./style";
import logo from "../assets/images/logo-azul-branco-modalgr.svg";

function App() {
  const [data, setData] = useState("");

  

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <img src={logo}></img>
      <h1>Bem vindo!</h1>
      <span>Insira os dados e faremos uma classificação</span>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

export default App;
