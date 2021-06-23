import React from "react";
import MaskedInput, { maskArray } from "react-text-mask";
import classNames from "classnames";
import { CommonFieldsProps } from "../form-defs";

import FieldBase from "../FieldBase";
import IconFilledError from "../../icons/generated/filled/FilledError";
import Conditional from "../../misc/Conditional";

interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    CommonFieldsProps {
  mask?: maskArray | ((value: string) => maskArray);
  htmlType?: string;
  errorMessage?: string;
  icon?: React.FC<any>;
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
  icon,
  ...rest
}) => {
  const RenderIcon = (() => {
    if (!!invalid) return IconFilledError;
    else if (!!icon) return icon;
    else return null;
  })();

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
        <div className="iq-input-field__input-holder">
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
          <div className="iq-input-field__icon">
            <Conditional condition={!!RenderIcon} renderIf={<RenderIcon />} />
          </div>
        </div>
      </FieldBase>
    </div>
  );
};

export default Input;
