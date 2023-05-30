import api from "../../../services/services";
import Topo from "../../../components/Topo";
import { useEffect, useState , useContext} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function HospedagemId(){
    
    const [hospedagem, setHospedagem] = useState([])
    const {id} = useParams()


    useEffect(()=>{
        api.getHospedagensById(id)
        .then(res=>{
            console.log(res.data)
            setHospedagem(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [id])

    const imagens = hospedagem.imagens
    const comodidades = hospedagem.comodidades


    return(
        <Container>
            <Topo/>
            <Imagens>
                {imagens ? imagens.map(i => <Img src={i} key={i} alt="Imagem"/>) : null}
            </Imagens>
            <Descricao>
                <Texto>
                    <p>{hospedagem && hospedagem.descricao ? hospedagem.descricao.toUpperCase() : null}</p>
                </Texto>
                <Linha></Linha>
                <Infos>
                    <Preco>
                        <p>R$ {hospedagem.diaria/100}</p>
                    </Preco>
                    <Acomodacoes>
                        {comodidades ? comodidades.map(c=><p>{c}</p>) : null}
                    </Acomodacoes>
                </Infos>
            </Descricao>
        </Container>
    )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #9CD1C9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
const Imagens = styled.div`
    background-color: rgba(22, 105, 92, 0.5);
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
    min-height: 250px;
`
const Img = styled.img`
    width: 280px;
    height: 220px;
    object-fit: cover;
`
const Descricao = styled.div`
    margin-top: 12px;
    background-color: rgba(22, 105, 92, 0.5);
    width: 85vw;
    min-height: 40vh;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    padding: 1%;
    gap: 25px;
`

const Texto = styled.div`
    width: 70%;
    font-size: 14px;
    text-align: justify;
    color: #FFFFFF;
`
const Acomodacoes = styled.div`
    font-size: 14px;
    text-align: left;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const Linha = styled.div`
    width: 1px;
    background-color: #FFFFFF;
    min-height: 35vh;
`
const Preco = styled.div`
    margin-top: auto;
    font-size: 60px;
    text-align: left;
    font-family: Calister;
    color: #FFFFFF;
    font-weight: 400;
`
const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
`