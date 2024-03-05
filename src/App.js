import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Atualizado para usar Routes em vez de Switch
import TelaLogin from './screens/login/TelaLogin';
import TelaCadastro from './screens/Cadastro/TelaCadastro'; // Importe a tela de cadastro
import './screens/login/TelaLogin.css';

function App() {
  return (
    <Router>
      <Routes> {/* Atualizado para usar Routes */}
        <Route path="/" element={<TelaLogin />} /> {/* Atualizado para usar a sintaxe de element */}
        <Route path="/cadastro" element={<TelaCadastro />} /> {/* Rota para a tela de cadastro */}
        {/* Outras rotas podem ser adicionadas aqui conforme necessário */}
      </Routes>
    </Router>
  )
}

export default App;
