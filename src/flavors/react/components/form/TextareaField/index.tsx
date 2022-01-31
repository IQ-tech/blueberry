import React from "react";
import FieldBase from "../FieldBase";
import classNames from "classnames";

import { TooltipProps } from "../../Tooltip";
import { CommonFieldsProps, ModifiedInputProps } from "../form-defs";

interface TextAreaProps extends CommonFieldsProps, ModifiedInputProps {
  tooltipConfig?: TooltipProps;
  /** Define the number of rows */
  rows?: number;
  /** Define the number of cols */
  cols?: number;
  /** Define a custom class for the field */
  customClass?: string;
  /** Define if the field is resizable */
  resize?: boolean;
  /** Enable spellcheck for the field */
  spellcheck?: boolean;
  /**  Define the minimum length */
  minLength?: number;
  /**  Define the maximum length */
  maxLength?: number;
}

const TextareaField: React.FC<TextAreaProps> = ({
  placeholder = "",
  name,
  value,
  required,
  errorMessage,
  label,
  optional,
  invalid,
  disabled,
  autoComplete,
  onChange,
  customClass,
  tooltipConfig,
  rows,
  cols,
  resize,
  spellcheck,
  minLength,
  maxLength,
}) => {
  function onChangeHandler(e) {
    if (!!onChange) onChange(e?.target?.value);
  }

  const baseClassName = classNames("iq-textarea-field", {
    "iq-textarea-field--invalid": !!invalid,
    "iq-textarea-field--disabled": !!disabled,
    [`iq-textarea-field--${customClass}`]: !!customClass,
  });

  const textareaClassName = classNames("iq-textarea-field__input", {
    "iq-textarea-field__input--no-resize": !resize,
  });

  return (
    <div className={baseClassName}>
      <FieldBase
        required={required}
        errorMessage={errorMessage}
        name={name}
        label={label}
        optional={optional}
        invalid={invalid}
        tooltipConfig={tooltipConfig}
      >
        <textarea
          placeholder={placeholder}
          className={textareaClassName}
          onChange={onChangeHandler}
          autoComplete={autoComplete}
          spellCheck={spellcheck}
          value={value}
          rows={rows ?? 3}
          cols={cols ?? 50}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
        />
      </FieldBase>
    </div>
  );
};

export default TextareaField;
