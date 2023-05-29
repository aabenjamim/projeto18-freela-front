import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BuscaHospedagens from "./pages/Hospedagens/BuscaHospedagens";
import BuscaPassagens from "./pages/Passagens/BuscaPassagens";
import GlobalStyle from './style/GlobalStyle';
import Passagens from "./pages/Passagens/Passagens";
import DadosProvider from "./context/DadosContext"

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
      </Routes>
    </BrowserRouter>
    </DadosProvider>
    </>
  );
}

export default App;
