import styled from "styled-components"
import { Link } from "react-router-dom";


export const Dados = styled.div`
    width: 100vw;
    height: 50px;
    background-image: linear-gradient(to right, #095B4E, #26A28E);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
`
export const Area = styled.div`
    padding: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`
export const Linha = styled.div`
    width: 2px;
    height: 25px;
    background-color: #FFFFFF;
`
export const Geral = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    p{
        color: #FFFFFF;
        font-size: 18px;
    }
    ion-icon{
        color: #FFFFFF;
        font-size: 18px;  
    }
`
export const Container = styled.div`
    background-color: #9CD1C9;
    width: 100vw;
    height: 100vh;
`
export const Hospedagem = styled.div`
    background-color: #FFFFFF;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Caixa = styled.div`
    width: 180px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    p{
        font-size: 14px;
        margin-top: 3px;
        margin-bottom: auto;
        text-align: center;
        color: #16695C; 
    }
`
export const Preco = styled.h1`
    font-family: Calister;
    font-size: 45px;
    margin-bottom: auto;
    margin-top: auto;
    color: #16695C;
`
export const ImageContainer = styled.div`
  width: 180px;
  height: 100px;
  border-radius: 10%;
  overflow: hidden;
  margin-top: 8px;
  img{
        width: 180px;
        height: 100px;
        object-fit: cover;
    }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`