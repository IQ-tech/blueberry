import React from 'react'
import { getAbsoluteLink } from '../helpers'
import Conditional from '../../../misc/Conditional'
import Button from '../../../Button'
import { Variant } from '../types'

interface IAuthButtonProps {
  variant?: Variant
  loginLink?: string
  registerLink?: string
}

const AuthButtons: React.FC<IAuthButtonProps> = ({
  variant = 'iq',
  loginLink,
  registerLink,
}) => {
  function redirectToPath(url: string): void {
    if (typeof window !== undefined) {
      window.open(url, '_blank')
    }
  }

  function onLogin() {
    const link = loginLink || '/app/entrar/'
    redirectToPath(link)
  }

  function onRegister() {
    const link = registerLink || '/app/cadastro/'
    redirectToPath(link)
  }

  return (
    <div className="header-classic__auth-buttons">
      <Conditional
        condition={variant === 'iq'}
        renderIf={
          <DefaultAuthButtons onRegister={onRegister} onLogin={onLogin} />
        }
        renderElse={
          <NewcoAuthButtons onRegister={onRegister} onLogin={onLogin} />
        }
      />
    </div>
  )
}

interface IAuthVariants {
  onRegister: () => void
  onLogin: () => void
}

const DefaultAuthButtons: React.FC<IAuthVariants> = ({
  onLogin,
  onRegister,
}) => {
  return (
    <>
      <button
        data-clicked="btn-register-header"
        className="header-classic__auth-button header-classic__auth-button--sign-in"
        onClick={onLogin}
      >
        <svg
          viewBox="0 0 17 19"
          id="ia-profile"
          xmlns="http://www.w3.org/2000/svg"
          className="header-classic__auth-button-icon"
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
        className="header-classic__auth-button header-classic__auth-button--sign-up"
        onClick={onRegister}
      >
        Começar agora
      </button>
    </>
  )
}

const NewcoAuthButtons: React.FC<IAuthVariants> = ({ onLogin, onRegister }) => {
  return (
    <div className="header-classic__newco-auth">
      <div className="header-classic__newco-auth__button">
        <Button
          size="medium"
          type="primary"
          loading={false}
          disabled={false}
          expand="xy"
          color="inverted"
          justify="center"
          onClick={onRegister}
        >
          Começar
        </Button>
      </div>
      <div className="header-classic__newco-auth__button">
        <Button
          size="medium"
          type="secondary"
          loading={false}
          disabled={false}
          expand="xy"
          color="inverted"
          justify="center"
          onClick={onLogin}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default AuthButtons
