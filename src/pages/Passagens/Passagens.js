import apiPassagens from "../../services/passagens";
import Topo from "../../components/Topo";
import { DadosContext } from '../../context/DadosContext'
import { useEffect, useState , useContext} from "react";
import styled from "styled-components";
import azul from "../../assets/Azul.svg"
import gol from "../../assets/Gol.svg"
import latam from "../../assets/Latam.svg"

export default function Passagens(){

    const {dadosViagem} = useContext(DadosContext)
    const [passagens, setPassagens] = useState([])

    useEffect(()=>{
        apiPassagens.getPassagens(dadosViagem)
        .then(res=>{
            setPassagens(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    console.log(passagens)
    console.log(dadosViagem)

    return(
        <Container>
            <Topo/>
            <Dados>
                <Geral>
                    <p>{dadosViagem.cidadeOrigem}, {dadosViagem.estadoOrigem}</p>
                    <ion-icon name="airplane"></ion-icon>
                    <p>{dadosViagem.cidadeDestino}, {dadosViagem.estadoDestino}</p>
                </Geral>
                {dadosViagem.dia?                 
                <><Linha></Linha><Geral>
                        <ion-icon name="calendar"></ion-icon>
                        <p>28/08/2023</p>
                    </Geral></> :  <><Linha></Linha><Geral>
                        <ion-icon name="calendar"></ion-icon>
                        <p>DATAS DISPONÍVEIS</p>
                    </Geral></> }

                {dadosViagem.valorMaximo?                 
                <> <Linha></Linha>
                <Geral>
                    <p>ATÉ R$ {dadosViagem.valorMaximo/100}</p>
                </Geral></> : <> <Linha></Linha>
                <Geral>
                    <p>TODOS OS VALORES</p>
                </Geral></>  }
            </Dados>
            <Viagens>
                {passagens.map(p=>
                    <Passagem className={p.companhia.toLowerCase()}>
                        <Preco>R$ {(p.preco)/100}</Preco>
                        <Infos>
                            <LinhaH></LinhaH>
                                <Hora>
                                    <ion-icon name="time-outline"></ion-icon>
                                    <p>{p.horarioPartida} - {p.horarioChegada}</p>
                                </Hora>
                                <Hora>
                                    <ion-icon name="calendar"></ion-icon>
                                    <p>{p.dataPartida}</p>
                                </Hora>
                            <LinhaH></LinhaH>                    
                        </Infos>
                        <img src={p.companhia === 'AZUL' ? azul : 
                        p.companhia === 'GOL' ? gol : latam} alt="Companhia Aérea" />
                    </Passagem>
                )}
            </Viagens>
        </Container>  
        )
}

const Dados = styled.div`
    width: 100vw;
    height: 50px;
    background-image: linear-gradient(to right, #095B4E, #26A28E);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
`
const Linha = styled.div`
    width: 2px;
    height: 25px;
    background-color: #FFFFFF;
`
const Geral = styled.div`
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
const Data = styled.div`
    display: flex;
    flex-direction: row;
`
const Container = styled.div`
    background-color: #9CD1C9;
    width: 100vw;
    height: 100vh;
`
const Passagem = styled.div`
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
const Preco = styled.h1`
    font-family: Calister;
    font-size: 45px;
    margin-bottom: 5px;
    color: #16695C;
`
const Hora = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #16695C;
    font-size: 18px;
    height: 25px;
`

const Viagens = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`
const LinhaH = styled.div`
    width: 140px;
    height: 1px;
    background-color: #16695C;
`
const Infos = styled.div`
    height: 0px;
`