// src/App.js
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import RegrasCrasePage from './pages/RegrasCrasePage';
import TiposLiterariosPage from './pages/TiposLiterariosPage';
import DiversasImagensPage from './pages/DiversasImagensPage'; // Importe o novo componente
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/regras-crase" activeClassName="active">
            Regras da Crase
          </NavLink>
          <NavLink to="/tipos-literarios" activeClassName="active">
            Tipos Literários
          </NavLink>
          <NavLink to="/diversas-imagens" activeClassName="active">
            Diversas Imagens
          </NavLink>
        </nav>
        <hr />
        {/* Adicione a nova rota */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regras-crase" element={<RegrasCrasePage />} />
          <Route path="/tipos-literarios" element={<TiposLiterariosPage />} />
          <Route path="/diversas-imagens" element={<DiversasImagensPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
