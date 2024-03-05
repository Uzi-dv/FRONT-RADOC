import React, { useState } from 'react';

function LoginForm({ onSubmit, error }) {
  const [loginData, setLoginData] = useState({ login: '', senha: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(loginData);
  };

  return (
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
      <button type="submit" className='button'>Entrar</button>
      <div className="esqueceu-senha">
        <a href="#">Esqueceu a senha?</a>
      </div>
    </form>
  );
}

export default LoginForm;
