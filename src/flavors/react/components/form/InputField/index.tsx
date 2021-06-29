import React, { Fragment } from "react";
import MaskedInput, { maskArray } from "react-text-mask";
import classNames from "classnames";
import { CommonFieldsProps } from "../form-defs";

import FieldBase from "../FieldBase";
import IconFilledError from "../../icons/generated/filled/FilledError";
import Conditional from "../../misc/Conditional";
import { Modify } from "../form-defs";

type ModifiedInputProps = Modify<
  React.HTMLAttributes<HTMLInputElement>,
  {
    onChange(value: string): void;
  }
>;

interface InputProps extends ModifiedInputProps, CommonFieldsProps {
  /** React-text-mask mask */
  mask?: maskArray | ((value: string) => maskArray);
  /** Set the html `type` attribute */
  htmlType?: string;
  /** Icon to render on the right side */
  icon?: React.FC<any>;
  customClass?: string;
  /** Icon to render on the left side */
  LeftIcon?: React.FC<any>;
}

const InputField: React.FC<InputProps> = ({
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
  onChange,
  customClass,
  LeftIcon,
  ...rest
}) => {
  const RenderIcon = (() => {
    if (!!invalid) return IconFilledError;
    else if (!!icon) return icon;
    else return Fragment;
  })();

  const shouldRenderIcon = !!RenderIcon ? true : false;

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
      >
        <div className="iq-input-field__input-holder">
          <Conditional
            condition={!!LeftIcon}
            renderIf={
              <div className="iq-input-field__icon iq-input-field__icon--left">
                <LeftIcon expand />
              </div>
            }
          />
          <MaskedInput
            disabled={disabled}
            className="iq-input-field__input"
            placeholder={placeholder}
            type={htmlType}
            onChange={onChangeHandler}
            mask={mask ? mask : false}
            autoComplete={autoComplete}
            value={value}
            name={name}
            {...rest}
          />
          <div className="iq-input-field__icon iq-input-field__icon--right">
            <Conditional
              condition={shouldRenderIcon}
              renderIf={<RenderIcon expand />}
            />
          </div>
        </div>
      </FieldBase>
    </div>
  );
};

export default InputField;
