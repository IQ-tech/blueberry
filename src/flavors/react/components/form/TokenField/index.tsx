import React from 'react'
import classNames from 'classnames'

import useTokenInput from './hook'

interface TokenFieldProps {
  size?: number
  timer?: number
  onCompleteToken?: (value: string) => void
  onChange?: (value: string) => void
  onChangeTimer?: () => void
  invalid?: boolean
  disabled?: boolean
  type?: 'number' | 'password' | 'text'
}

const TokenField = ({
  size = 6,
  onCompleteToken,
  onChange,
  timer,
  onChangeTimer,
  invalid,
  disabled,
  type,
}: TokenFieldProps) => {
  const {
    tokenMap,
    rootElementRef,
    onChangeNumber,
    onKeyUpHandler,
    onPasteNumber,
  } = useTokenInput({
    size,
    onCompleteToken,
    onChange,
    timer,
    onChangeTimer,
  })

  const holderClass = classNames('iq-token-field__input-holder', {
    'iq-input-field--invalid': invalid,
  })

  return (
    <div className="iq-token-field" ref={rootElementRef}>
      {[...Object.values(tokenMap)].map((_, i) => (
        <div className={holderClass} key={`token-digit-${i}`}>
          <input
            type={type || 'number'}
            value={tokenMap[i]}
            disabled={disabled}
            className="iq-input-field__input"
            onChange={(e) => onChangeNumber(e)}
            onKeyUp={(e) => onKeyUpHandler(e, i)}
            onPaste={(e) => onPasteNumber(e)}
            data-token-i={i}
          />
        </div>
      ))}
    </div>
  )
}

export default TokenField
