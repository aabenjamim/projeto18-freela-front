import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const Logo = styled.div`
    img{
        width: 400px;
    }
    overflow: none;
`
export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 90px;
    background-image: linear-gradient(to right, #095B4E, #26A28E);
    width: 100vw;
    height: 46.5vh;
    margin-top: auto;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
`
export const Botao = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #DF8612;
    border-radius: 15px;
    width: 210px;
    height: 210px;
    align-items: center;
    ion-icon{
        font-size: 130px;
        margin-top: auto;
        color: #FFFFFF;
    }
    div{
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        margin-top: auto;
        width: 100%;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        h1{
            font-weight: 400;
            color: #DF8612;
            font-size: 25px;
        }
    }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`