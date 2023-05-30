import api from "../../../services/services";
import Topo from "../../../components/Topo";
import { DadosContext } from '../../../context/DadosContext'
import { useEffect, useState , useContext} from "react";
import {Dados, Area, Linha, Geral, Container, Hospedagem, Caixa, Preco, ImageContainer, StyledLink} from "./style";


export default function Hospedagens(){

    const {dadosHospedagem} = useContext(DadosContext)
    const [hospedagens, setHospedagens] = useState([])


    useEffect(()=>{
        api.getHospedagens(dadosHospedagem)
        .then(res=>{
            setHospedagens(res.data)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])


    return(
        <Container>
            <Topo/>
            <Dados>
                <Geral>
                <ion-icon name="home"></ion-icon>
                    <p>{dadosHospedagem.cidade}, {dadosHospedagem.estado}</p>
                </Geral>
                {dadosHospedagem.valorMaximo?                 
                <> <Linha></Linha>
                <Geral>
                    <p>ATÉ R$ {dadosHospedagem.valorMaximo/100}</p>
                </Geral></> : <> <Linha></Linha>
                <Geral>
                    <p>TODOS OS VALORES</p>
                </Geral></>  }
            </Dados>
            <Area>
                {hospedagens.map(h=>
                <StyledLink to={`/hospedagens/${h.id}`}>
                    <Hospedagem>
                            <Caixa>
                                <ImageContainer>
                                    <img src={h.imgPrincipal} />
                                </ImageContainer>
                                <p>{h.nome}</p>
                                <Preco>R$ {(h.diaria) / 100}</Preco>
                            </Caixa>
                    </Hospedagem>
                </StyledLink>
                )}
            </Area>
        </Container>  
        )
}

