import React, { useState } from 'react';
import './TelaLogin.css'; // Importe os estilos específicos da tela de login
import ufraLogo from './ufra.svg'; // Suponho que o ufraLogo seja necessário, então mantive a importação

function TelaLogin() {
  const [loginData, setLoginData] = useState({ login: '', senha: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      if (!response.ok) {
        throw new Error('Falha no login');
      }
      // Handle successful login
    } catch (error) {
      setError('Credenciais inválidas.');
    }
  };

  const handleGoogleLogin = () => {
    alert('Simulando login com Google');
  };

  return (
    <div className="container">
      <div className="barra"></div>
      <header className="cabecalho">
        <div className="conteudo">
          <a href="https://novo.ufra.edu.br/" tabIndex="1" title="Ir para o Portal da UFRA" target="_blank" rel="noreferrer">
            <img src={ufraLogo} className="logo" alt="Logo da UFRA" />
          </a>
          <span className="barra-vertical"></span>
          <span className="frase">UNIVERSIDADE FEDERAL RURAL DA AMAZONIA</span>
          <span className="barra-vertical"></span>
          <span className="radoc">RADOC</span>
        </div>
      </header>
        {/* Segunda barra */}
      <div className="barra2"></div>
      <div className="tela-login">
        <form onSubmit={handleSubmit}>
          <h2>AUTENTICAÇÃO INTEGRADA</h2>
          {error && <div className="error">{error}</div>}
          <div className="form-group">
            <label htmlFor="login">Login</label>
            <input type="text" id="login" name="login" value={loginData.login} onChange={handleInputChange} placeholder="Digite seu login"/>
          </div>  
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" value={loginData.senha} onChange={handleInputChange} placeholder="Digite sua senha" />
          </div>
          <button type="submit"className='button'>Entrar</button>
          <div className="esqueceu-senha">
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className="ou-container">
            <div className="barra-horizontal"></div>
            <div className="ou-text">ou</div>
            <div className="barra-horizontal"></div>
          </div>
          <button type="button" onClick={handleGoogleLogin} className="google-login-button">
            <img src="https://www.imagensempng.com.br/wp-content/uploads/2023/05/278-4.png" alt="Logo do Google" className="google-logo" />
            Login com Google
          </button>
        </form>
	{/* Terceira barra */}
      <div className="barra3"></div>
      </div>
	{/* Quarta barra */}
      <div className="barra4"></div>
    </div>
  );
}

export default TelaLogin;