import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SobreMim from './components/Pages/SobreMim/SobreMim';
import Currículo from './components/Pages/Currículo/Currículo';
import Projetos from './components/Pages/Projetos/Projetos';
import Contatos from './components/Pages/Contatos/Contatos';

function App() {
  return(
    <header>
      <BrowserRouter>
        <Routes>
          <Route path="" element={ <SobreMim/> }></Route>
          <Route path="/Currículo" element={ <Currículo/> }></Route>
          <Route path="/Projetos" element={ <Projetos/> }></Route>
          <Route path="/Contatos" element={ <Contatos/> }></Route>
        </Routes>
      </BrowserRouter>
    </header>
  )
}

export default App;
