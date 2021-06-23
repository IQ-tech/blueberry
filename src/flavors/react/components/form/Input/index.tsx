import React from "react";
import MaskedInput, { maskArray } from "react-text-mask";
import FieldBase from "../FieldBase";
import classNames from "classnames";
import { CommonFieldsProps } from "../form-defs";

interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    CommonFieldsProps {
  mask?: maskArray | ((value: string) => maskArray);
  htmlType?: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  mask,
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
  ...rest
}) => {
  const inputClassName = classNames("iq-input-field", {
    "iq-input-field--invalid": !!invalid,
    "iq-input-field--disabled": !!disabled,
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
      >
        <MaskedInput
          disabled={disabled}
          className="iq-input-field__input"
          placeholder={placeholder}
          type={htmlType}
          mask={mask ? mask : false}
          autoComplete={autoComplete}
          value={value}
          name={name}
          {...rest}
        />
      </FieldBase>
    </div>
  );
};

export default Input;
