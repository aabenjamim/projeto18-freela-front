import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hospedagens from "./pages/Hospedagens/Hospedagens";
import Passagens from "./pages/Passagens/Passagens";
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/passagens" element={<Passagens/>}/>
        <Route path="/hospedagens" element={<Hospedagens/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
