import React from 'react'
import { CustomLogoLinks } from '../types'
import Conditional from '../../../misc/Conditional'

interface ILogoProps {
  isLogged: boolean
  customLinks?: CustomLogoLinks
}
const IqLogo: React.FC<ILogoProps> = ({ isLogged, customLinks }) => {
  const loggedRedirect = customLinks?.loggedIn || '/app/home'
  const redirect = customLinks?.loggedOut || '/'
  const redirectLink = isLogged ? loggedRedirect : redirect

  const handleRedirect = () => {
    if (isLogged) {
      customLinks?.loggedInFunction
        ? customLinks?.loggedInFunction()
        : (window.location.pathname = loggedRedirect)
    } else {
      customLinks?.loggedOutFunction
        ? customLinks?.loggedOutFunction()
        : (window.location.pathname = redirect)
    }
  }

  return (
    <Conditional
      condition={
        isLogged
          ? !customLinks?.loggedInFunction
          : !customLinks?.loggedOutFunction
      }
      renderIf={
        <a
          href={redirectLink}
          aria-label="IQ Home"
          className="header-classic__logo-link"
          data-clicked="iq-header-logo"
        >
          <svg
            className="header-classic__logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 56"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M32.782 38.193v9.682c0 3.058 2.25 5.603 5.187 6.076v-9.529c0-3.079-2.29-5.73-5.187-6.23zm-1.976-.085h.988v-1.97H26.25c-6.447 0-11.693-5.229-11.693-11.656 0-6.427 5.246-11.656 11.693-11.656 6.448 0 11.694 5.23 11.694 11.656v5.57h1.976v-5.57c0-7.513-6.132-13.626-13.67-13.626-7.537 0-13.669 6.113-13.669 13.626 0 7.513 6.132 13.626 13.67 13.626h4.555v-1.97h.003l.04-11.66c0-2.524-2.063-4.58-4.598-4.58-2.536 0-4.6 2.056-4.6 4.584 0 2.528 2.064 4.584 4.6 4.584v1.97c-3.626 0-6.576-2.94-6.576-6.554 0-3.614 2.95-6.554 6.576-6.554 3.625 0 6.575 2.94 6.575 6.554l-.041 11.717c4.029.498 7.16 3.996 7.16 8.223V56h-.988c-4.495 0-8.151-3.645-8.151-8.125v-9.767zM4.59 1.97a2.572 2.572 0 0 0-2.573 2.565A2.572 2.572 0 0 0 4.59 7.099a2.572 2.572 0 0 0 2.573-2.564A2.572 2.572 0 0 0 4.59 1.97zm0 7.1C2.082 9.07.04 7.034.04 4.534S2.083 0 4.59 0s4.55 2.034 4.55 4.535c0 2.5-2.042 4.534-4.55 4.534zm3.56 28.879c-4.493 0-8.15-3.645-8.15-8.125v-18.93h9.14v19.17H7.162v-17.2H1.976v16.96c0 3.394 2.77 6.155 6.175 6.155v1.97z"
            ></path>
          </svg>
        </a>
      }
      renderElse={
        <button
          onClick={handleRedirect}
          aria-label="IQ Home"
          className="header-classic__logo-link header-classic__logo-link--button"
          data-clicked="iq-header-logo"
        >
          <svg
            className="header-classic__logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 56"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M32.782 38.193v9.682c0 3.058 2.25 5.603 5.187 6.076v-9.529c0-3.079-2.29-5.73-5.187-6.23zm-1.976-.085h.988v-1.97H26.25c-6.447 0-11.693-5.229-11.693-11.656 0-6.427 5.246-11.656 11.693-11.656 6.448 0 11.694 5.23 11.694 11.656v5.57h1.976v-5.57c0-7.513-6.132-13.626-13.67-13.626-7.537 0-13.669 6.113-13.669 13.626 0 7.513 6.132 13.626 13.67 13.626h4.555v-1.97h.003l.04-11.66c0-2.524-2.063-4.58-4.598-4.58-2.536 0-4.6 2.056-4.6 4.584 0 2.528 2.064 4.584 4.6 4.584v1.97c-3.626 0-6.576-2.94-6.576-6.554 0-3.614 2.95-6.554 6.576-6.554 3.625 0 6.575 2.94 6.575 6.554l-.041 11.717c4.029.498 7.16 3.996 7.16 8.223V56h-.988c-4.495 0-8.151-3.645-8.151-8.125v-9.767zM4.59 1.97a2.572 2.572 0 0 0-2.573 2.565A2.572 2.572 0 0 0 4.59 7.099a2.572 2.572 0 0 0 2.573-2.564A2.572 2.572 0 0 0 4.59 1.97zm0 7.1C2.082 9.07.04 7.034.04 4.534S2.083 0 4.59 0s4.55 2.034 4.55 4.535c0 2.5-2.042 4.534-4.55 4.534zm3.56 28.879c-4.493 0-8.15-3.645-8.15-8.125v-18.93h9.14v19.17H7.162v-17.2H1.976v16.96c0 3.394 2.77 6.155 6.175 6.155v1.97z"
            ></path>
          </svg>
        </button>
      }
    />
  )
}

export default IqLogo
