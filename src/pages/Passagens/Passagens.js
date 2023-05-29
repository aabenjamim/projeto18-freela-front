import apiPassagens from "../../services/passagens";
import Topo from "../../components/Topo";
import { DadosContext } from '../../context/DadosContext'
import { useEffect, useState , useContext} from "react";
import styled from "styled-components";


export default function Passagens(){

    const {dadosViagem} = useContext(DadosContext)
    const [passagens, setPassagens] = useState([])

    useEffect(()=>{
        apiPassagens.getPassagens(dadosViagem)
        .then(res=>{
            setPassagens(res.data)
            console.log(dadosViagem)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    return(
        <>
            <Topo/>
            <Dados>
                <Geral>
                    <p>Campinas, SP</p>
                    <ion-icon name="airplane"></ion-icon>
                    <p>Fortaleza, CE</p>
                </Geral>
                <Linha></Linha>
                <Geral>
                    <ion-icon name="calendar"></ion-icon>
                    <p>28/08/2023</p>
                </Geral>
                <Linha></Linha>
                <Geral>
                    <p>ATÉ R$ 250</p>
                </Geral>
            </Dados>
            <Exibir>

            </Exibir>
        </>  
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
const Exibir = styled.div`
    background-color: #9CD1C9;
    width: 100vw;
    height: calc(100vh - 120px);
`