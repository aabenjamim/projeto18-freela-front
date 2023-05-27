import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { Container, Logo, Menu, StyledLink, Botao } from './style'

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