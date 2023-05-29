import Topo from '../../components/Topo'
import {Container, Formulario, Option, Imagem,
Data, Select,MeioSelect, CaixaBusca, Lupa, Preco, Valor} from './style'
import { useEffect, useState, useContext } from "react"
import apiPassagens from '../../services/passagens'
import { DadosContext } from '../../context/DadosContext'
import { useNavigate } from "react-router-dom"
import logoAviao from "../../assets/LogoAviao.svg"


export default function BuscaHospedagens(){

    const [estados, setEstados] = useState([])
    const [destinos, setDestinos] = useState([])
    const [valorEstadoDestino, setValorEstadoDestino] = useState("")
    const [valorCidadeDestino, setValorCidadeDestino] = useState("")
    const [valorMaximo, setValorMaximo] = useState("")
    const {setDadosHospedagem} = useContext(DadosContext)
    const [selecaoCompleta, setSelecaoCompleta] = useState(false);


    const navigate = useNavigate()

    function estadosLista(){
        apiPassagens.getEstados()
        .then(res=>{
          setEstados(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    function destinosLista() {
        apiPassagens.getDestinos()
        .then(res => {
            setDestinos(res.data);
        if (valorEstadoDestino !== "" && valorCidadeDestino !== "") {
            setSelecaoCompleta(true);
        } else {
            setSelecaoCompleta(false);
        }
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => estadosLista(), []);
    useEffect(() => destinosLista(), []);
    
    function verificarSelecaoCompleta() {
        if (valorEstadoDestino !== "" && valorCidadeDestino !== "") {
          setSelecaoCompleta(true);
        } else {
          setSelecaoCompleta(false);
        }
      }
      
      
      useEffect(() => verificarSelecaoCompleta(), [valorEstadoDestino, valorCidadeDestino]);


    function busca(){
    if (selecaoCompleta) {
        if(valorMaximo){
            const params ={
                estadoDestino: valorEstadoDestino,
                cidadeDestino: valorCidadeDestino,
                valorMaximo: valorMaximo*100}
        
                setDadosHospedagem(params)
                navigate("/hospedagens")
        
        }  else{
            const params ={
                estadoDestino: valorEstadoDestino,
                cidadeDestino: valorCidadeDestino,
            }
        
                setDadosHospedagem(params)
                navigate("/hospedagens")
        
            }
        }
    }

    return(
        <Container>
            <Topo/>
            <Formulario>
                <Data>
                    <div>
                        <p>ESTADO DE HOSPEDAGEM</p>
                    </div>
                    <Select>
                        <MeioSelect
                            value={valorEstadoDestino}
                            onChange={e => {
                            setValorEstadoDestino(e.target.value);
                            setSelecaoCompleta(e.target.value !== "" && valorCidadeDestino !== "");
                            }}
                        >
                            <Option value="">SELECIONE UM ESTADO</Option>
                            {estados.map(e => (
                            <Option key={e.nome} value={e.nome}>
                                {e.nome}
                            </Option>
                            ))}
                        </MeioSelect>
                    </Select>
                </Data>
                <Data>
                    <div>
                        <p>CIDADE DE HOSPEDAGEM</p>
                    </div>
                    <Select>
                        <MeioSelect
                            value={valorCidadeDestino}
                            onChange={e => {
                            setValorCidadeDestino(e.target.value);
                            setSelecaoCompleta(valorEstadoDestino !== "" && e.target.value !== "");
                            }}
                        >
                            <Option value="">SELECIONE UMA CIDADE</Option>
                            {destinos.map(d => (
                            <Option key={d.nome} value={d.nome}>
                                {d.nome}
                            </Option>
                            ))}
                        </MeioSelect>
                    </Select>
                </Data>
                <CaixaBusca>
                    <Preco>
                        <div>
                            <p>PREÇO MÁXIMO (OPCIONAL)</p>
                        </div>
                        <Valor value={valorMaximo} type="text" placeholder='DIGITE UM VALOR MÁXIMO'
                        onChange={e => setValorMaximo(e.target.value)}/>
                    </Preco>
                    <Lupa className={!selecaoCompleta ? "desabilitado" : ""} OnClick={busca()}>
                        <ion-icon name="search-sharp"></ion-icon>
                    </Lupa>
                </CaixaBusca>
            </Formulario>
            <Imagem src={logoAviao}/>
        </Container>
    )
}



