import Topo from '../../components/Topo'
import {Container, Formulario, Input, CaixaEsquerda, CaixaDireita, Option, Imagem,
Data, Select, EsqSelect, DirSelect, MeioSelect, CaixaBusca, Lupa, Preco, Valor} from './style'
import { useEffect, useState, useContext } from "react"
import apiPassagens from '../../services/passagens'
import { DadosContext } from '../../context/DadosContext'
import { useNavigate } from "react-router-dom"
import logoAviao from "../../assets/LogoAviao.svg"


export default function BuscaPassagens(){

    const [estados, setEstados] = useState([])
    const [origens, setOrigens] = useState([])
    const [destinos, setDestinos] = useState([])
    const [valorEstadoOrigem, setValorEstadoOrigem] = useState("")
    const [valorEstadoDestino, setValorEstadoDestino] = useState("")
    const [valorCidadeOrigem, setValorCidadeOrigem] = useState("")
    const [valorCidadeDestino, setValorCidadeDestino] = useState("")
    const [valorMaximo, setValorMaximo] = useState("")
    const [valorDia, setValorDia] = useState("")
    const [valorMes, setValorMes] = useState("")
    const [valorAno, setValorAno] = useState("")
    const {setDadosViagem} = useContext(DadosContext)
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

    function origensLista(){
        apiPassagens.getOrigens()
        .then(res=>{
          setOrigens(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    function destinosLista(){
        apiPassagens.getDestinos()
        .then(res=>{
          setDestinos(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    useEffect(() => estadosLista(), []);
    useEffect(() => origensLista(), []);
    useEffect(() => destinosLista(), []);
    

    function renderOptionsDia(){
        const options = [];
        for (let i = 1; i <= 31; i++) {
          options.push(<Option key={i} value={i}>{i}</Option>);
        }
        return options
    }

    const meses = ['JANEIRO','FEVEREIRO','MARÇO','ABRIL','MAIO','JUNHO',
    'JULHO','AGOSTO','SETEMBRO','OUTUBRO','NOVEMBRO','DEZEMBRO']
    function renderOptionsMes(){   
        return meses.map((mes, index) => (
          <Option key={index} value={mes}>{mes}</Option>
        ))
    }

    function verificarSelecaoCompleta() {
        if (valorEstadoOrigem !== "" && valorEstadoDestino !== "" &&
         valorCidadeOrigem !== "" && valorCidadeDestino !== "") {
          setSelecaoCompleta(true);
        } else {
          setSelecaoCompleta(false);
        }
      }
      
    useEffect(() => verificarSelecaoCompleta(), [valorEstadoOrigem, valorEstadoDestino,
        valorCidadeOrigem, valorCidadeDestino]);

    function handleMes(e){
        const valor = e.target.value
        for(let i=0;i<meses.length; i++){
            if(valor===meses[i] && i<9){
                setValorMes(`0${i+1}`)
            } else if(valor===meses[i] && i>=9){
                setValorMes(`${i+1}`)
            }
        }
    }
    
    function renderOptionsAno(){
        const anos = [];
        for (let i = 2023; i <= 2035; i++) {
          anos.push(<Option key={i} value={i}>{i}</Option>);
        }
        return anos
    }

    function busca(){
    if (selecaoCompleta) {
        if(valorMaximo){
            const params ={
                estadoOrigem: valorEstadoOrigem,
                estadoDestino: valorEstadoDestino,
                cidadeOrigem: valorCidadeOrigem,
                cidadeDestino: valorCidadeDestino,
                dia: valorDia,
                mes: valorMes,
                ano: valorAno,
                valorMaximo: valorMaximo*100}
        
                setDadosViagem(params)
                navigate("/passagens")
        
        }  else{
            const params ={
                estadoOrigem: valorEstadoOrigem,
                estadoDestino: valorEstadoDestino,
                cidadeOrigem: valorCidadeOrigem,
                cidadeDestino: valorCidadeDestino,
                dia: valorDia,
                mes: valorMes,
                ano: valorAno
            }
        
                setDadosViagem(params)
                navigate("/passagens")
        
            }
        }
    }

    return(
        <Container>
            <Topo/>
            <Formulario>
                <Input>
                    <CaixaEsquerda>
                        <div>
                            <p>ESTADO DE ORIGEM</p>
                        </div>
                        <select onChange={event => setValorEstadoOrigem(event.target.value)}>
                            <Option value={valorEstadoOrigem}>SELECIONE UM ESTADO</Option>
                            {estados.map(e=>
                                <Option value={e.nome}>{e.nome}</Option>
                            )}
                        </select>
                    </CaixaEsquerda>
                    <CaixaDireita>
                        <div>
                            <p>CIDADE DE ORIGEM</p>
                        </div>
                        <select onChange={event => setValorCidadeOrigem(event.target.value)}>
                            <Option value={valorCidadeOrigem}>SELECIONE UMA CIDADE</Option>
                            {origens.map(o=>
                                <Option value={o.nome}>{o.nome}</Option>
                            )}
                        </select>
                    </CaixaDireita>
                </Input>
                <Input>
                    <CaixaEsquerda>
                        <div>
                            <p>ESTADO DE DESTINO</p>
                        </div>
                        <select onChange={event => setValorEstadoDestino(event.target.value)}>
                            <Option value={valorEstadoDestino}>SELECIONE UM ESTADO</Option>
                            {estados.map(e=>
                                <Option value={e.nome}>{e.nome}</Option>
                            )}
                        </select>
                    </CaixaEsquerda>
                    <CaixaDireita>
                        <div>
                            <p>CIDADE DE DESTINO</p>
                        </div>
                        <select onChange={event => setValorCidadeDestino(event.target.value)}>
                            <Option value={valorCidadeDestino}>SELECIONE UMA CIDADE</Option>
                            {destinos.map(d=>
                                <Option value={d.nome}>{d.nome}</Option>
                            )}
                        </select>
                    </CaixaDireita>
                </Input>
                <Data>
                    <div>
                        <p>DATA DA VIAGEM</p>
                    </div>
                    <Select>
                        <EsqSelect onChange={event => setValorDia(event.target.value)}>
                            <Option value="">DIA</Option>
                            {renderOptionsDia()}
                        </EsqSelect>
                        <MeioSelect onChange={event => handleMes(event)}>
                            <Option value="">MÊS</Option>
                            {renderOptionsMes()}
                        </MeioSelect>
                        <DirSelect onChange={event => setValorAno(event.target.value)}>
                            <Option value="">ANO</Option>
                            {renderOptionsAno()}
                        </DirSelect>
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
                    <Lupa onClick={busca} className={!selecaoCompleta ? "desabilitado" : ""}>
                        <ion-icon name="search-sharp"></ion-icon>
                    </Lupa>
                </CaixaBusca>
            </Formulario>
            <Imagem src={logoAviao}/>
        </Container>
    )
}