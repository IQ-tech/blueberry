import React from "react";
import classNames from "classnames";
import { uniqueKey } from "../../../helpers/utils";

import useAutocompleteField from "./hook";
import { CommonFieldsProps, ModifiedInputProps } from "../form-defs";
import { TooltipProps } from "../../Tooltip";
import FieldBase from "../FieldBase";

interface Option {
  value: string | number;
  label: string | number;
}

interface AutoCompleteProps extends CommonFieldsProps, ModifiedInputProps {
  suggestionUse?: "mandatory" | "optional";
  options?: Option[];
  tooltipConfig?: TooltipProps;
  openDropdownOnFocus?: boolean;
  isLoading?: boolean;
  filterOptions?(currentInputValue: string, options: Option[]): Option[];
}

const AutoCompleteField: React.FC<AutoCompleteProps> = ({
  suggestionUse = "optional",
  options,
  value = "",
  openDropdownOnFocus,
  invalid,
  disabled,
  required,
  name,
  errorMessage,
  label,
  optional,
  tooltipConfig,
  placeholder,

  /** Events */
  onChange,
  onFocus,
  onBlur,
}) => {
  const inputClassName = classNames("iq-input-field", {
    "iq-input-field--invalid": !!invalid,
    "iq-input-field--disabled": !!disabled,
  });
  const {
    onFocusHandler,
    onBlurHandler,
    inputValue,
    inputChangeHandler,
    shouldShowSuggestions,
  } = useAutocompleteField({
    onFocus,
    onBlur,
    openDropdownOnFocus,
    value,
    onChange,
    suggestionUse,
    options,
  });

  return (
    <div className={inputClassName}  onBlur={onBlurHandler}>
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
            className="iq-input-field__input"
            disabled={disabled}
            placeholder={placeholder}
            onFocus={onFocusHandler}
            value={inputValue}
            onChange={inputChangeHandler}
            name={name}
          />
        </div>
        {shouldShowSuggestions && (
          <ul className="iq-input-field__dropdown">
            {options.map((option, i) => (
              <li
                className="iq-input-field__dropdown-option"
                key={uniqueKey(`input-dropdown-option`)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => console.log(option?.value)}
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
