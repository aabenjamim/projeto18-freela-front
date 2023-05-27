//import { useState } from 'react';
import Topo from '../../components/Topo'
import {Container, Formulario, Input, CaixaEsquerda, CaixaDireita, Option,
Data, Select, EsqSelect, DirSelect, MeioSelect, CaixaBusca, Lupa, Preco} from './style'


export default function Passagens(){

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
                            <Option value="nome1">Nome 1</Option>
                            <Option value="nome2">Nome 2</Option>
                            <Option value="nome3">Nome 3</Option>
                            <Option value="nome4">Nome 4</Option>
                        </select>
                    </CaixaEsquerda>
                    <CaixaDireita>
                        <div>
                            <p>CIDADE DE ORIGEM</p>
                        </div>
                        <select>
                            <Option value="">SELECIONE UMA CIDADE</Option>
                            <Option value="nome1">Nome 1</Option>
                            <Option value="nome2">Nome 2</Option>
                            <Option value="nome3">Nome 3</Option>
                            <Option value="nome4">Nome 4</Option>
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
                            <Option value="nome1">Nome 1</Option>
                            <Option value="nome2">Nome 2</Option>
                            <Option value="nome3">Nome 3</Option>
                            <Option value="nome4">Nome 4</Option>
                        </select>
                    </CaixaEsquerda>
                    <CaixaDireita>
                        <div>
                            <p>CIDADE DE DESTINO</p>
                        </div>
                        <select>
                            <Option value="">SELECIONE UMA CIDADE</Option>
                            <Option value="nome1">Nome 1</Option>
                            <Option value="nome2">Nome 2</Option>
                            <Option value="nome3">Nome 3</Option>
                            <Option value="nome4">Nome 4</Option>
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