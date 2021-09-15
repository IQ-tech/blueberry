import React from "react";
import { uniqueKey } from "../../../helpers/utils";
import useAutocompleteField from "./hook";
import FieldBase from "../FieldBase";

import { AutoCompleteProps } from "./types";

const AutoCompleteField: React.FC<AutoCompleteProps> = (props) => {
  const {
    invalid,
    disabled,
    required,
    name,
    errorMessage,
    label,
    optional,
    tooltipConfig,
    placeholder,
  } = props;

  const {
    onFocusHandler,
    onBlurHandler,
    inputValue,
    inputChangeHandler,
    shouldShowSuggestions,
    onSelectOptionHandler,
    onInputClickHandler,
    inputClassName,
    displayOptions,
    inputElement
  } = useAutocompleteField(props);

  return (
    <div className={inputClassName} onBlur={onBlurHandler}>
      <FieldBase
        required={required}
        errorMessage={errorMessage}
        name={name}
        label={label}
        optional={optional}
        invalid={invalid}
        tooltipConfig={tooltipConfig}
      >
        <div className="iq-input-field__input-holder">
          <input
            type="text"
            ref={inputElement}
            className="iq-input-field__input"
            disabled={disabled}
            placeholder={placeholder}
            onFocus={onFocusHandler}
            onClick={onInputClickHandler}
            value={inputValue}
            onChange={inputChangeHandler}
            name={name}
          />
        </div>
        {shouldShowSuggestions && (
          <ul
            className="iq-input-field__dropdown"
            onMouseDown={(e) => e.preventDefault()}
          >
            {displayOptions.map((option) => (
              <li
                className="iq-input-field__dropdown-option"
                key={uniqueKey("input-dropdown-option")}
                onClick={() => onSelectOptionHandler(option?.value)}
              >
                {option?.label}
              </li>
            ))}
          </ul>
        )}
      </FieldBase>
    </div>
  );
};

export default AutoCompleteField;
