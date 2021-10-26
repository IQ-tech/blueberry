import React from "react";
import useTokenInput from "./hook";

interface TokenFieldProps {
  size?: number;
  timer?: number;
  onCompleteToken?: () => void;
  onChange?: () => void;
  onChangeTimer?: () => void;
}

const TokenField = ({
  size = 6,
  onCompleteToken,
  onChange,
  timer,
  onChangeTimer,
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
  });

  return (
    <div className="iq-token-field" ref={rootElementRef}>
      {[...Object.values(tokenMap)].map((_, i) => (
        <div className="iq-token-field__input-holder" key={`token-digit-${i}`}>
          <input
            type="text"
            value={tokenMap[i]}
            className="iq-input-field__input"
            onChange={(e) => onChangeNumber(e)}
            onKeyUp={(e) => onKeyUpHandler(e, i)}
            onPaste={(e) => onPasteNumber(e)}
            data-token-i={i}
          />
        </div>
      ))}
    </div>
  );
};

export default TokenField;
