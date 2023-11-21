import React from 'react'
import Button from '../../Button'

const AuthButtons: React.FC = () => {
  function redirectToPath(url: string): void {
    if (typeof window !== undefined) {
      window.open(url, '_blank')
    }
  }

  function onLogin() {
    redirectToPath('https://app.iq.com.br/login')
  }

  function onRegister() {
    redirectToPath('https://app.iq.com.br/login')
  }

  return (
    <div className="header-iq__auth-buttons">
      <div className="header-iq__auth-buttons__button">
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
          Cadastrar
        </Button>
      </div>
      <div className="header-iq__auth-buttons__button">
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
