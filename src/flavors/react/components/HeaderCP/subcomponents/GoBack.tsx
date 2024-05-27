import React from 'react'
import { loggedMenuItemsIcons } from '../icons'

interface IGobBackProps {
  onGoBackClick?: () => void
}
const GoBack: React.FC<IGobBackProps> = ({ onGoBackClick }) => {
  const handleClick = () => {
    if (!!onGoBackClick) onGoBackClick()
  }
  return (
    <button
      className="header-cp__panel-left__back"
      onClick={handleClick}
      aria-label="Voltar para página anterior"
    >
      <span
        className="header-cp__panel-left__back__icon"
        dangerouslySetInnerHTML={{
          __html: loggedMenuItemsIcons.goBack,
        }}
      />
    </button>
  )
}

export default GoBack
