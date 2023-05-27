import logo from '../assets/LogoSemLinha.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Topo(){
    return(
        <Container>
            <img src={logo} alt="logo"/>
            <div>
                <StyledLink to={'/'}>HOME</StyledLink>
                <ion-icon name="play"></ion-icon>
                <StyledLink to={'/passagens'}>PASSAGENS</StyledLink>
                <ion-icon name="play"></ion-icon>
                <StyledLink to={'/hospedagens'}>HOSPEDAGENS</StyledLink>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFFFFF;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-top: 0;
    width: 100vw;
    img{
        width: 150px;
        margin-top: 20px;
    }
    div{
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
        color: #16695C;
    }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`