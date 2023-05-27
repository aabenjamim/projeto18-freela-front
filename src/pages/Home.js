import logo from '../assets/Logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Home(){

    return(
        <Container>
            <Logo>
                <img src={logo} alt='logo'/>
            </Logo>
            <Menu>
                <StyledLink to={'/passagens'}>
                    <Botao>
                        <ion-icon name="airplane"></ion-icon>
                        <div>
                            <h1>PASSAGENS</h1>
                        </div>
                    </Botao>
                </StyledLink>
                <StyledLink to={'/hospedagens'}>
                    <Botao>
                        <ion-icon name="home"></ion-icon>
                        <div>
                            <h1>HOSPEDAGENS</h1>
                        </div>
                    </Botao>
                </StyledLink>
            </Menu>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
const Logo = styled.div`
    img{
        width: 400px;
    }
    overflow: none;
`
const Menu = styled.div`
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
const Botao = styled.div`
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`