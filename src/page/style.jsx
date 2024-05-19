import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto;
  background-color: #b3cde4;
  font-family: "Plus Jakarta Sans";

  h1 {
    color: #00172b;
    font-size: 28px;
  }

  span {
    color: #00172b;
    font-size: 20px;
  }

`;

export const Form = styled.form`
  display: flex;
  margin-top: 30px;

  input {
    flex: 1;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid #eee;
  }

  button {
    font-size: 16px;
    color: #eee;
    cursor: pointer;
    background-color: #f58220;
    border-radius: 4px;
    border-style: none;
  }
`;
