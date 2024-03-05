import React from 'react';

function GoogleLoginButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="google-login-button">
      <img src="https://www.imagensempng.com.br/wp-content/uploads/2023/05/278-4.png" alt="Logo do Google" className="google-logo" />
      Login com Google
    </button>
  );
}

export default GoogleLoginButton;
