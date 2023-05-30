import styled from "styled-components";

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
export const Data = styled.div`
    display: flex;
    flex-direction: row;
`
export const Container = styled.div`
    background-color: #9CD1C9;
    width: 100vw;
    height: 100vh;
`
export const Passagem = styled.div`
    background-color: #FFFFFF;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    padding-bottom: 130px;
    position: relative;
    &.azul{
        img{
            position: absolute;
            top: 95px;
        }
    }
    &.gol{
        img{
            position: absolute;
            top: 140px;
            width: 120px;
        }
    }
    &.latam{
        img{
            position: absolute;
            top: 150px;
            width: 155px;
        }
    }
`
export const Preco = styled.h1`
    font-family: Calister;
    font-size: 45px;
    margin-bottom: 5px;
    color: #16695C;
`
export const Hora = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #16695C;
    font-size: 18px;
    height: 25px;
`

export const Viagens = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`
export const LinhaH = styled.div`
    width: 140px;
    height: 1px;
    background-color: #16695C;
`
export const Infos = styled.div`
    height: 0px;
`
export const Vazio = styled.p`
    background-color: white;
    width: 280px;
    height: 80px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 15px;
    color: #16695C;
`