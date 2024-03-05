import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link
import './TelaCadastro.css';

function TelaCadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione lógica para enviar os dados do formulário para o backend
  };

  return (
    <div className="container">
      <div className="content">
        <div className="first-column">
          <h2 className="title">Cadastrar</h2>
          <div className="form">
            <label className="label-input" htmlFor="nome">
              <i className="far fa-user icon-modify"></i>
              <input type="text" id="nome" name="nome" placeholder="Name" value={formData.nome} onChange={handleInputChange} />
            </label>

            <label className="label-input" htmlFor="email">
              <i className="far fa-envelope icon-modify"></i>
              <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            </label>

            <label className="label-input" htmlFor="senha">
              <i className="fas fa-lock icon-modify"></i>
              <input type="password" id="senha" name="senha" placeholder="Password" value={formData.senha} onChange={handleInputChange} />
            </label>

            <button type="submit" className="btn btn-primary">Criar conta</button>
          </div>
        </div>
        <div className="second-column">
          <h2 className="title2">Olá, bem-vindo!</h2>
          <p class="description">Para se manter conectado conosco, <span>faça login com suas informações pessoais</span></p>
          {/* Adicione o Link para a tela de login */}
          <Link to="/">Entrar</Link>
        </div>
      </div>
    </div>
  );
}

export default TelaCadastro;
