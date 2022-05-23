import React from "react";
import { getAbsoluteLink } from "../helpers";

const AuthButtons = () => {
  function redirectToPath(url: string): void {
    if (typeof window !== undefined) {
      window.location.href = url;
    }
  }
  function onLogin() {
    redirectToPath(getAbsoluteLink("/app/entrar/"));
  }

  function onRegister() {
    redirectToPath(getAbsoluteLink("/app/cadastro/"));
  }

  return (
    <div className="header-iq__auth-buttons">
      <button
        data-clicked="btn-register-header"
        className="header-iq__auth-button header-iq__auth-button--sign-in"
        onClick={onLogin}
      >
        <svg
          viewBox="0 0 17 19"
          id="ia-profile"
          xmlns="http://www.w3.org/2000/svg"
          className="header-iq__auth-button-icon"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeWidth="1.5"
            transform="translate(1 1)"
          >
            <path
              strokeLinecap="round"
              d="M15 16.875V15a3.75 3.75 0 00-3.75-3.75h-7.5A3.75 3.75 0 000 15v1.875"
            />
            <circle cx="7.5" cy="3.75" r="3.75" strokeLinecap="square" />
          </g>
        </svg>
        Entrar
      </button>
      <button
        data-clicked="btn-login-header"
        className="header-iq__auth-button header-iq__auth-button--sign-up"
        onClick={onRegister}
      >
        Começar agora
      </button>
    </div>
  );
};

export default AuthButtons;
