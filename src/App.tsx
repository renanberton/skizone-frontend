import Home from "./pages/home";
import Skins from "./pages/skins";
import Contato from "./pages/contato";
import Conta from "./pages/conta";
import EsqueceuSenha from "./pages/esqueceu-senha";
import Carrinho from "./pages/carrinho";
import Cadastro from "./pages/cadastro";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skins' element={<Skins />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/conta' element={<Conta />} />
          <Route path='/resetSenha' element={<EsqueceuSenha />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
