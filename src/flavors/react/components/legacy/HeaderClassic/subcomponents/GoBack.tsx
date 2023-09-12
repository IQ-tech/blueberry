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
    <button className="header-classic__panel-left__back" onClick={handleClick}>
      <span
        className="header-classic__panel-left__back__icon"
        dangerouslySetInnerHTML={{
          __html: loggedMenuItemsIcons.goBack,
        }}
      />
    </button>
  )
}

export default GoBack
