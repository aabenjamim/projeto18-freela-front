import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './style/GlobalStyle'
import Home from "./pages/Home";
import Passagens from "./pages/Passagens";
import Hospedagens from "./pages/Hospedagens";

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/passagens" element={<Passagens/>}/>
        <Route path="/hospedagens" element={<Hospedagens/>}/>
        <Route path="" element="" />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
