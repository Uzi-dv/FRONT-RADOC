import React from 'react';
import ufraLogo from './ufra.svg';

function UfraLogo() {
  return (
    <a href="https://novo.ufra.edu.br/" tabIndex="1" title="Ir para o Portal da UFRA" target="_blank" rel="noreferrer">
      <img src={ufraLogo} className="logo" alt="Logo da UFRA" />
    </a>
  );
}

export default UfraLogo;