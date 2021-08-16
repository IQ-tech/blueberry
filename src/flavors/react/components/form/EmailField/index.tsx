import React, { ReactNode } from "react";
import classNames from "classnames";
import { CommonFieldsProps } from "../form-defs";
import { TooltipProps } from "../../Tooltip";

import FieldBase from "../FieldBase";
import IconFilledError from "../../icons/generated/filled/FilledError";
import { ModifiedInputProps } from "../form-defs";

interface AutoSuggetionOptionProps {
  value: string;
  domain: string;
}

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
  autoSuggestionOptions: Array<AutoSuggetionOptionProps>;
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
  customClass,
  LeftIcon,
  tooltipConfig,
  ...rest
}) => {
  const shouldRenderRightIcon = !invalid && !!Icon;

  function onChangeHandler(e) {
    if (!!onChange) {
      onChange(e?.target?.value);
    }
  }

  function handleChangeValue(value) {
    handleSetSuggestion(value);
  }

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
        <div className="iq-input-field__input-holder">
          {!!LeftIcon ? (
            <div className="iq-input-field__icon iq-input-field__icon--left">
              <LeftIcon expand />
            </div>
          ) : null}

          <input
            disabled={disabled}
            className="iq-input-field__input"
            placeholder={placeholder}
            type={htmlType}
            onChange={onChangeHandler}
            value={value}
            name={name}
            {...rest}
          />
          <ul className="iq-input-autosuggestion">
            {autoSuggestionOptions.map((suggestion, index) => (
              <li
                key={index + suggestion.value}
                className="iq-input-autosuggestion__option"
                onClick={() =>
                  handleChangeValue(`${suggestion.value}@${suggestion.domain}`)
                }
              >
                <span>{`${suggestion.value}@${suggestion.domain}`}</span>
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
