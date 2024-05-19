import { useState } from "react";
import { Container, Form } from "./style";
import logo from "../assets/images/logo-azul-branco-modalgr.svg";

function App() {
  //criando o estado para salvar o que for informado no input
  const [data, setData] = useState("");
  //separando o estado em dois arrays distintos
  const [formattedData, setFormattedData] = useState({
    numbers: [],
    strings: [],
  });

  const formatData = (data) => {
    // dividindo a array de acordo com a vírgula, além de mapear cada item e remover os espaços indesejados com trim e garantindo qu não existam elementos vazios com filter
    const dataParts = data
      .split(",")
      .map((part) => part.trim())
      .filter((part) => part !== "");

    //criando as arrays que irão armazenar os numeros e palavras a partir da desetrturação do estado "forattedData"
    const { numbers, strings } = formattedData;

    //Criando um ForEach para percorrer os componentes da array (ou string)
    dataParts.forEach((part) => {
      // Aqui é feita uma verificação lógica: isNaN é uma função do javascript para verificar se determinado dado não é número. No caso, usando "!" na frente invertemos essa lógica e selecionamos apenas os número
      // (eu amo usar operador ternário)
      !isNaN(part)
        ? //a função push insere o elemento na sua devida array
          numbers.push(part)
        : strings.push(part);
    });

    return { numbers, strings };
  };
  //função que irá tratar o evento de submit do form (reciclando explicações :p)
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormattedData(formatData(data));
    setData('');
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
