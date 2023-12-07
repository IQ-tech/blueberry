import React from 'react'
import Button from '../../../Button'

interface IAuthButtonProps {
  loginLink?: string
  registerLink?: string
}

const AuthButtons: React.FC<IAuthButtonProps> = ({
  loginLink,
  registerLink,
}) => {
  function redirectToPath(url: string): void {
    if (typeof window !== undefined) {
      window.open(url, '_blank')
    }
  }

  function onLogin() {
    const link = loginLink || 'https://app.iq.com.br'
    redirectToPath(link)
  }

  function onRegister() {
    const link = registerLink || 'https://app.iq.com.br'
    redirectToPath(link)
  }

  return (
    <div className="header-classic__auth-buttons">
      <div className="header-classic__auth-buttons__button">
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
      <div className="header-classic__auth-buttons__button">
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
