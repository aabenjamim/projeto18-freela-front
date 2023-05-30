import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BuscaHospedagens from "./pages/Hospedagens/Busca/BuscaHospedagens";
import BuscaPassagens from "./pages/Passagens/Busca/BuscaPassagens";
import Hospedagens from "./pages/Hospedagens/Exibicao/Hospedagens";
import GlobalStyle from './style/GlobalStyle';
import Passagens from "./pages/Passagens/Exibicao/Passagens";
import DadosProvider from "./context/DadosContext"
import HospedagemId from "./pages/Hospedagens/Detalhes/HospedagemId";

function App() {
  return (
    <>
    <GlobalStyle/>
    <DadosProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/busca-passagens" element={<BuscaPassagens/>}/>
        <Route path="/busca-hospedagens" element={<BuscaHospedagens/>}/>
        <Route path="/passagens" element={<Passagens/>}/>
        <Route path="/hospedagens" element={<Hospedagens/>}/>
        <Route path="/hospedagens/:id" element={<HospedagemId/>}/>
      </Routes>
    </BrowserRouter>
    </DadosProvider>
    </>
  );
}

export default App;
