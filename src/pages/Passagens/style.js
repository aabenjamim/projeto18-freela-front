import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Imagem = styled.img`
  position: absolute;
  width: 180px;
  top: 480px;
  right: 50px;
`

export const Formulario = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  background-image: linear-gradient(to right, #095B4E, #26A28E);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 3%;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  background-color: #DF8612;
  border-radius: 15px;
`;

export const CaixaEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  box-sizing: border-box;

  select {
    margin-top: auto;
    height: 50px;
    width: 100%;
    border-bottom-left-radius: 15px;
    border: none;
    color: #969696;
    font-size: 16px;
    padding: 5%;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    option:checked {
      color: #969696;
      font-size: 16px;
    }

    ${(props) =>
      props.selectedOption &&
      css`
        background-color: #9CD1C9;
      `}
  }

  div {
    margin-bottom: auto;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    align-items: center;
    color: #FFFFFF;
  }
`;

export const CaixaDireita = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  select {
    margin-top: auto;
    height: 50px;
    width: 100%;
    border-bottom-right-radius: 15px;
    border: none;
    background-color: #EDEDED;
    color: #969696;
    font-size: 16px;
    padding: 5%;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    option:checked {
      color: #969696;
      font-size: 16px;
    }

    ${(props) =>
      props.selectedOption &&
      css`
        background-color: #9CD1C9;
      `}
  }

  div {
    margin-bottom: auto;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    align-items: center;
    color: #FFFFFF;
  }
`;

export const Option = styled.option`
  background-color: #EDEDED;
  color: #969696;
  font-size: 18px;

  &:hover {
    background-color: #9CD1C9;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #DF8612;
  border-radius: 15px;

  div {
    margin-bottom: auto;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    align-items: center;
    color: #FFFFFF;
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;

  select {
    margin-top: auto;
    height: 50px;
    color: #969696;
    font-size: 16px;
    padding: 3%;
    background-color: #EDEDED;
    border: none;
    text-align: center;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    option:checked {
      color: #969696;
      font-size: 16px;
    }

    ${(props) =>
      props.selectedOption &&
      css`
        background-color: #9CD1C9;
      `}
  }

  option {
    background-color: #EDEDED;
    color: #969696;
    font-size: 18px;

    &:hover {
      background-color: #9CD1C9;
    }
  }
`;

export const EsqSelect = styled.select`
  width: 20%;
  border-bottom-left-radius: 15px;
`;

export const DirSelect = styled.select`
  width: 25%;
  border-bottom-right-radius: 15px;
`;

export const MeioSelect = styled.select`
  width: 55%;
`;

export const Preco = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  background-color: #DF8612;
  border-radius: 15px;

  select {
    margin-top: auto;
    height: 50px;
    color: #969696;
    font-size: 16px;
    padding: 3%;
    background-color: #EDEDED;
    border: none;
    text-align: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    ${(props) =>
      props.selectedOption &&
      css`
        background-color: #9CD1C9;
      `}
  }

  option {
    background-color: #EDEDED;
    color: #969696;
    font-size: 18px;

    &:hover {
      background-color: #9CD1C9;
    }

    &:checked {
      color: #969696;
      font-size: 16px;
    }
  }

  div {
    margin-bottom: auto;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    align-items: center;
    color: #FFFFFF;
  }
`;

export const CaixaBusca = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  gap: 15px;
  justify-content: space-between;
`;

export const Lupa = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DF8612;
  color: #FFFFFF;
  cursor: pointer;
  &.desabilitado {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Valor = styled.input`
    margin-bottom: auto;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    color: #969696;
    font-size: 16px;
    padding: 3%;
    background-color: #EDEDED;
    border: none;
    text-align: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    outline: none;
  ::placeholder{
    font-size: 18px;
    color: #969696;
  }
`