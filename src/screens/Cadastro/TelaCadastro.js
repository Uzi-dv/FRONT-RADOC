import React, { useState } from 'react';
import './TelaCadastro.css';
import ufraLogo from './ufra.svg';

function TelaCadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.senha || !formData.confirmarSenha) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }
    try {
      // Envie os dados para o backend
      // Adicione lógica para enviar uma notificação por email para troca de senha
      alert('Cadastro realizado com sucesso. Um email de troca de senha foi enviado para ' + formData.email);
    } catch (error) {
      // Trate o erro, se necessário
    }
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
      <div className="barra2"></div>
      <div className="tela-cadastro">
        <form onSubmit={handleSubmit}>
          <h2>CADASTRO</h2>
          {error && <div className="error">{error}</div>}
          <div className="form">
            <label className="label-input" htmlFor="nome">
              <i className="far fa-user icon-modify"></i>
              <input type="text" id="nome" name="nome" placeholder="Nome" value={formData.nome} onChange={handleInputChange} />
            </label>

            <label className="label-input" htmlFor="email">
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            </label>

            <label className="label-input" htmlFor="senha">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" id="senha" name="senha" placeholder="Senha" value={formData.senha} onChange={handleInputChange} />
            </label>

            <label className="label-input" htmlFor="confirmarSenha">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar Senha" value={formData.confirmarSenha} onChange={handleInputChange} />
            </label>

            <button type="submit" className="btnCriar">Criar conta</button>
          </div>
        </form>
        <div className="barra3"></div>
      </div>
      <div className="barra4"></div>
    </div>
  );
}

export default TelaCadastro;
