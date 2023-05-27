import logo from '../assets/Logo.svg'
import styled from 'styled-components'

export default function Topo(){
    return(
        <Container>
            <img src={logo} alt="logo"/>
            <div>
                <p>HOME</p>
                <ion-icon name="play"></ion-icon>
                <p>PASSAGENS</p>
                <ion-icon name="play"></ion-icon>
                <p>HOSPEDAGENS</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background-color: red;
    img{
        width: 50px;
    }
`