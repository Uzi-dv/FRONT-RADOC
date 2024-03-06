import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Atualizado para usar Routes em vez de Switch
import TelaLogin from './screens/login/TelaLogin';
import TelaCadastro from './screens/Cadastro/TelaCadastro'; // Importe a tela de cadastro
import TelaRecuperarSenha from './screens/RecuperarSenha/RecuperarSenha'; // Importe a tela de recuperação de senha
import './screens/login/TelaLogin.css';

function App() {
  return (
    <Router>
      <Routes> {/* Atualizado para usar Routes */}
        <Route path="/" element={<TelaLogin />} /> {/* Atualizado para usar a sintaxe de element */}
        <Route path="/cadastro" element={<TelaCadastro />} /> {/* Rota para a tela de cadastro */}
        <Route path="/recuperar-senha" element={<TelaRecuperarSenha />} /> {/* Rota para a tela de recuperação de senha */}
        {/* Outras rotas podem ser adicionadas aqui conforme necessário */}
      </Routes>
    </Router>
  )
}

export default App;
