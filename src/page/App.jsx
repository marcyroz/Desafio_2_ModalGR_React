import React from "react";
import { useState } from "react";
import { Container, Form } from "./style";
import logo from "../assets/images/logo-azul-branco-modalgr.svg";

function App() {
  const [data, setData] = useState("");
  const [formattedData, setFormattedData] = useState({
    numbers: [],
    strings: [],
  });

  const formatData = (data) => {
    // Dividir a string em partes usando a vírgula como delimitador
    const dataParts = data
      .split(",")
      .map((part) => part.trim())
      .filter((part) => part !== "");

    // Inicializar arrays para números e strings
    const numbers = [];
    const strings = [];

    // Percorrer as partes e separar números de strings
    dataParts.forEach((part) => {
      // Tentar converter a parte em número
      if (!isNaN(part) && part !== "") {
        numbers.push(Number(part));
      } else {
        strings.push(part);
      }
    });

    return { numbers, strings };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormattedData(formatData(data));
  };

  return (
    <Container>
      <img src={logo} width={160}></img>
      <h1>Bem vindo!</h1>
      <span>Insira os dados e faremos uma classificação</span>
      <span>Instruções: insira os números e nomes com vírgulas separando</span>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </Form>
      <>
        <h3>Números:</h3>
        <span>{formattedData.numbers.join(", ")}</span>
      </>
      <>
        <h3>Palavras:</h3>
        <span>{formattedData.strings.join(", ")}</span>
      </>
    </Container>
  );
}

export default App;
