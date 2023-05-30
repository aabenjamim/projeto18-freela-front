import api from "../../../services/services";
import Topo from "../../../components/Topo";
import { DadosContext } from '../../../context/DadosContext';
import { useEffect, useState, useContext } from "react";
import azul from "../../../assets/Azul.svg";
import gol from "../../../assets/Gol.svg";
import latam from "../../../assets/Latam.svg";
import { Dados, Linha, Geral, Container, Passagem, Preco, Hora, Viagens, LinhaH, Infos, Vazio } from "./style";

export default function Passagens() {
  const { dadosViagem } = useContext(DadosContext);
  const [passagens, setPassagens] = useState([]);

  useEffect(() => {
    api.getPassagens(dadosViagem)
      .then(res => {
        setPassagens(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(passagens);
  console.log(dadosViagem);

  return (
    <Container>
      <Topo />
      <Dados>
        <Geral>
          <p>{dadosViagem.cidadeOrigem}, {dadosViagem.estadoOrigem}</p>
          <ion-icon name="airplane"></ion-icon>
          <p>{dadosViagem.cidadeDestino}, {dadosViagem.estadoDestino}</p>
        </Geral>
        {dadosViagem.dia ?
          <>
            <Linha></Linha>
            <Geral>
              <ion-icon name="calendar"></ion-icon>
              <p>28/08/2023</p>
            </Geral>
          </> :
          <>
            <Linha></Linha>
            <Geral>
              <ion-icon name="calendar"></ion-icon>
              <p>DATAS DISPONÍVEIS</p>
            </Geral>
          </>
        }

        {dadosViagem.valorMaximo ?
          <>
            <Linha></Linha>
            <Geral>
              <p>ATÉ R$ {dadosViagem.valorMaximo / 100}</p>
            </Geral>
          </> :
          <>
            <Linha></Linha>
            <Geral>
              <p>TODOS OS VALORES</p>
            </Geral>
          </>
        }
      </Dados>
      {passagens.length === 0 ? (
        <Vazio>Sem passagens disponíveis :(</Vazio>
      ) : (
        <Viagens>
          {passagens.map(p =>
            <Passagem className={p.companhia.toLowerCase()}>
              <Preco>R$ {(p.preco) / 100}</Preco>
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
      )}
    </Container>
  );
}
