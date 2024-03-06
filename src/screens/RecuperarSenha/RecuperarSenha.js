import React, { useState } from 'react';
import './RecuperarSenha.css'; // Importe os estilos específicos da tela de recuperação de senha
import ufraLogo from './ufra.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function RecuperarSenha() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor, digite seu email.');
      return;
    }
    try {
      // Aqui você pode adicionar a lógica para enviar um email de recuperação de senha
      // Por exemplo:
      // await enviarEmailRecuperacaoSenha(email);
      setSuccessMessage('Um email de recuperação de senha foi enviado para ' + email);
    } catch (error) {
      console.error('Erro ao enviar email de recuperação de senha:', error);
      setError('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
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
      <div className="tela-recuperar-senha">
        <form onSubmit={handleSubmit}>
          <h2 className='h2-recuperar'>REDEFINIÇÃO DE SENHA</h2>
          <p className="instrucao-recuperar-senha">Digite seu e-mail no campo abaixo e lhe enviaremos um código de ativação para redefinição de senha.</p>
          {error && <div className="error">{error}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
          {!successMessage && (
            <div className="form">
              <label className="label-input-recuperar-senha" htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} className="icon-modify-recuperar-senha" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className="recuperar-senha"
              />
            </label>
            <button type="submit" className="btnRecuperarSenha">Recuperar Senha</button>
            <p className="link-login">Já possui cadastro? <a href="/login">Faça login</a></p>
            </div>
          )}
        </form>
        <div className="barra3"></div>
      </div>
      <div className="barra4"></div>
    </div>
  );
}

export default RecuperarSenha;
