import React from "react";
import { uniqueKey } from "../../../helpers/utils";
import useAutocompleteField from "./hook";
import FieldBase from "../FieldBase";
import MiscSearchLoader from "../../icons/generated/misc/MiscSearchLoader";

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
    isLoading,
  } = props;

  const {
    onFocusHandler,
    onBlurHandler,
    displayValue,
    inputChangeHandler,
    shouldShowSuggestions,
    onSelectOptionHandler,
    inputClassName,
    displayOptions,
    inputElement,
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
            value={displayValue}
            onChange={inputChangeHandler}
            name={name}
          />
          {!!isLoading && (
            <div className="iq-input-field__icon iq-input-field__icon--right">
              <MiscSearchLoader expand />
            </div>
          )}
        </div>
        {shouldShowSuggestions && (
          <div
            className="iq-input-field__dropdown"
            onMouseDown={(e) => e.preventDefault()}
          >
            <ul className="iq-input-field__dropdown-list">
              {displayOptions.map((option) => (
                <li
                  className="iq-input-field__dropdown-option"
                  key={uniqueKey("input-dropdown-option")}
                  onClick={() => onSelectOptionHandler(option?.label)}
                >
                  {option?.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </FieldBase>
    </div>
  );
};

export default AutoCompleteField;
