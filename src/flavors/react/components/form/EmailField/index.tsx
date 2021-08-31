import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { CommonFieldsProps } from "../form-defs";
import { TooltipProps } from "../../Tooltip";

import FieldBase from "../FieldBase";
import IconFilledError from "../../icons/generated/filled/FilledError";
import { ModifiedInputProps } from "../form-defs";

interface EmailFieldProps extends ModifiedInputProps, CommonFieldsProps {
  /** Set the html `type` attribute */
  htmlType?: string;
  /** Icon to render on the right side */
  Icon?: React.FC<any>;
  customClass?: string;
  /** Icon to render on the left side */
  LeftIcon?: React.FC<any>;
  tooltipConfig?: TooltipProps;
  /** Domain autosuggetion array */
  autoSuggestionOptions: string[];
  /** Function to change payload value */
  handleSetSuggestion?: (value: string) => void;
}

const EmailField: React.FC<EmailFieldProps> = ({
  htmlType = "text",
  placeholder = "",
  autoSuggestionOptions = [],
  name,
  value,
  required,
  errorMessage,
  label,
  optional,
  invalid,
  disabled,
  Icon,
  onChange,
  handleSetSuggestion,
  onBlur,
  customClass,
  LeftIcon,
  tooltipConfig,
  ...rest
}) => {
  // Ref's
  const inputContainerRef = useRef(null);
  const inputRef = useRef(null);

  // State
  const [isInputFocused, setIsInputFocused] = useState(false);

  const shouldRenderRightIcon = !invalid && !!Icon;

  function onChangeHandler(e) {
    if (!!onChange) {
      onChange(e?.target?.value);
    }
  }

  function handleChangeValue(value) {
    handleSetSuggestion(value);
  }

  function handleInputFocus(e = null) {
    if (e) e.preventDefault();

    setIsInputFocused(true);
    inputRef.current.focus();
  }

  function handleInputBlur() {
    setIsInputFocused(false);
    inputRef.current.blur();
  }

  function handleKeyDown(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      handleInputBlur();
      onBlur(e);
    }
  }

  function _handleClickOutside(e) {
    if (inputContainerRef.current.contains(e.target)) {
      e.preventDefault();
      handleInputFocus();
      return;
    }

    if (!isInputFocused) return;

    handleInputBlur();
    onBlur(e);
  }

  useEffect(() => {
    window.addEventListener("click", _handleClickOutside);

    return () => window.removeEventListener("click", _handleClickOutside);
  }, [isInputFocused, onBlur]);

  const inputClassName = classNames("iq-input-field", {
    "iq-input-field--invalid": !!invalid,
    "iq-input-field--disabled": !!disabled,
    "iq-input-field--left-icon": !!LeftIcon,
    [`iq-input-field--${customClass}`]: !!customClass,
  });

  return (
    <div className={inputClassName}>
      <FieldBase
        required={required}
        errorMessage={errorMessage}
        name={name}
        label={label}
        optional={optional}
        invalid={invalid}
        tooltipConfig={tooltipConfig}
      >
        <div className="iq-input-field__input-holder" ref={inputContainerRef}>
          {!!LeftIcon ? (
            <div className="iq-input-field__icon iq-input-field__icon--left">
              <LeftIcon expand />
            </div>
          ) : null}

          <input
            ref={inputRef}
            disabled={disabled}
            className="iq-input-field__input"
            placeholder={placeholder}
            type={htmlType}
            onChange={onChangeHandler}
            onFocus={handleInputFocus}
            onBlur={(e) => e.preventDefault()}
            onKeyDown={handleKeyDown}
            value={value}
            name={name}
            {...rest}
          />
          <ul className="iq-input-autosuggestion">
            {isInputFocused &&
              autoSuggestionOptions.map((suggestion, index) => (
                <li
                  key={index + suggestion}
                  className="iq-input-autosuggestion__option"
                  onClick={() => handleChangeValue(suggestion)}
                >
                  <span>{suggestion}</span>
                </li>
              ))}
          </ul>
          <div className="iq-input-field__icon iq-input-field__icon--right">
            <div className="iq-input-field__invalid-icon">
              <IconFilledError expand />
            </div>
            {!!shouldRenderRightIcon ? <Icon expand /> : null}
          </div>
        </div>
      </FieldBase>
    </div>
  );
};

export default EmailField;
