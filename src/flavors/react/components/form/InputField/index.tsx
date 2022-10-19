import React from "react";
import classNames from "classnames";
import { CommonFieldsProps } from "../form-defs";
import { TooltipProps } from "../../Tooltip";

import FieldBase from "../FieldBase";
import IconFilledError from "../../icons/generated/filled/FilledError";
import { ModifiedInputProps } from "../form-defs";

interface InputProps extends ModifiedInputProps, CommonFieldsProps {
  /** Set the html `type` attribute */
  htmlType?: string;
  /** Icon to render on the right side */
  Icon?: React.FC<any>;
  customClass?: string;
  /** Icon to render on the left side */
  LeftIcon?: React.FC<any>;
  tooltipConfig?: TooltipProps;
  /** Define if it should render a numeric keyboard in mobile devices */
  useNumericKeyboard?: boolean;
  inputRef?: React.MutableRefObject<any>
}

const InputField: React.FC<InputProps> = ({
  htmlType = "text",
  placeholder = "",
  autoComplete = "off",
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
  customClass,
  LeftIcon,
  tooltipConfig,
  useNumericKeyboard = false,
  inputRef,
  ...rest
}) => {
  const shouldRenderRightIcon = !invalid && !!Icon;

  function onChangeHandler(e) {
    if (!!onChange) {
      onChange(e?.target?.value);
    }
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
            autoComplete={autoComplete}
            value={value}
            name={name}
            inputMode={useNumericKeyboard ? "numeric" : undefined}
            pattern={useNumericKeyboard ? "[0-9]*" : undefined}
            ref={inputRef}
            {...rest}
          />
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

export default InputField;
