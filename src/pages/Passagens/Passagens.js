import Topo from '../../components/Topo'
import {Container, Formulario, Input, CaixaEsquerda, CaixaDireita, Option,
Data, Select, EsqSelect, DirSelect, MeioSelect, CaixaBusca, Lupa, Preco} from './style'
import { useEffect, useState } from "react"
import apiPassagens from '../../services/passagens'


export default function Passagens(){

    const [estados, setEstados] = useState([])
    const [origens, setOrigens] = useState([])
    const [destinos, setDestinos] = useState([])


    function estadosLista(){
        apiPassagens.getEstados()
        .then(res=>{
          console.log(res.data)
          setEstados(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    function origensLista(){
        apiPassagens.getOrigens()
        .then(res=>{
          console.log(res.data)
          setOrigens(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    function destinosLista(){
        apiPassagens.getDestinos()
        .then(res=>{
          console.log(res.data)
          setDestinos(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    useEffect(estadosLista)
    useEffect(origensLista)
    useEffect(destinosLista)

    return(
        <Container>
            <Topo/>
            <Formulario>
                <Input>
                    <CaixaEsquerda>
                        <div>
                            <p>ESTADO DE ORIGEM</p>
                        </div>
                        <select>
                            <Option value="">SELECIONE UM ESTADO</Option>
                            {estados.map(e=>
                                <Option value="nome-estado">{e.nome}</Option>
                            )}
                        </select>
                    </CaixaEsquerda>
                    <CaixaDireita>
                        <div>
                            <p>CIDADE DE ORIGEM</p>
                        </div>
                        <select>
                            <Option value="">SELECIONE UMA CIDADE</Option>
                            {origens.map(o=>
                                <Option value="nome-origem">{o.nome}</Option>
                            )}
                        </select>
                    </CaixaDireita>
                </Input>
                <Input>
                    <CaixaEsquerda>
                        <div>
                            <p>ESTADO DE DESTINO</p>
                        </div>
                        <select>
                            <Option value="">SELECIONE UM ESTADO</Option>
                            {estados.map(e=>
                                <Option value="nome-estado">{e.nome}</Option>
                            )}
                        </select>
                    </CaixaEsquerda>
                    <CaixaDireita>
                        <div>
                            <p>CIDADE DE DESTINO</p>
                        </div>
                        <select>
                            <Option value="">SELECIONE UMA CIDADE</Option>
                            {destinos.map(d=>
                                <Option value="nome-destino">{d.nome}</Option>
                            )}
                        </select>
                    </CaixaDireita>
                </Input>
                <Data>
                    <div>
                        <p>DATA DA VIAGEM</p>
                    </div>
                    <Select>
                        <EsqSelect>
                            <Option value="">DIA</Option>
                            <Option value="nome1">Nome 1</Option>
                            <Option value="nome2">Nome 2</Option>
                            <Option value="nome3">Nome 3</Option>
                            <Option value="nome4">Nome 4</Option>
                        </EsqSelect>
                        <MeioSelect>
                            <Option value="">MÊS</Option>
                            <Option value="nome1">Nome 1</Option>
                            <Option value="nome2">Nome 2</Option>
                            <Option value="nome3">Nome 3</Option>
                            <Option value="nome4">Nome 4</Option>
                        </MeioSelect>
                        <DirSelect>
                            <Option value="">ANO</Option>
                            <Option value="nome1">Nome 1</Option>
                            <Option value="nome2">Nome 2</Option>
                            <Option value="nome3">Nome 3</Option>
                            <Option value="nome4">Nome 4</Option>
                        </DirSelect>
                    </Select>
                </Data>
                <CaixaBusca>
                    <Preco>
                        <div>
                            <p>PREÇO MÁXIMO (OPCIONAL)</p>
                        </div>
                        <select>
                            <Option value="">SELECIONE UMA CIDADE</Option>
                            <Option value="nome1">Nome 1</Option>
                            <Option value="nome2">Nome 2</Option>
                            <Option value="nome3">Nome 3</Option>
                            <Option value="nome4">Nome 4</Option>
                        </select>
                    </Preco>
                    <Lupa>
                        <ion-icon name="search-sharp"></ion-icon>
                    </Lupa>
                </CaixaBusca>
            </Formulario>
        </Container>
    )
}