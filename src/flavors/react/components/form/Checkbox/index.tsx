import React from "react";
import classNames from "classnames";
import IconFilledError from "../../icons/generated/filled/FilledError";

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  invalid?: boolean;
  isChecked?: boolean;
  name?: string;
  label: string | number;
  required?: boolean;
  errorMessage?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label = "Checkbox",
  id,
  isChecked,
  disabled,
  onChange,
  required,
  invalid,
  errorMessage = "Este campo é obrigatório",
  ...props
}) => {
  const componentClass = classNames("iq-checkbox-field", {
    [`iq-checkbox-field--checked`]: !!isChecked,
    [`iq-checkbox-field--disabled`]: !!disabled,
    [`iq-checkbox-field--required`]: !!required,
    [`iq-checkbox-field--invalid`]: !!invalid && !!required && !isChecked,
  });

  const formattedLabel = required
    ? `${label} <span className="iq-checkbox-field__required-star">${"*"}</span>`
    : `${label}`;

  function onChangeHandler(e) {
    if (!!onChange) onChange(e.target.checked);
  }

  return (
    <div className={componentClass}>
      <label htmlFor={id} className="iq-checkbox-field__holder">
        <input
          className="iq-checkbox-field__input"
          id={id}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={onChangeHandler}
          {...props}
        />
        <span className="iq-checkbox-field__icon" />
        <span
          className="iq-checkbox-field__label"
          dangerouslySetInnerHTML={{
            __html: formattedLabel,
          }}
        />
      </label>
      <div className="iq-checkbox-field__invalid-holder">
        <div className="iq-checkbox-field__invalid-icon-holder">
          <IconFilledError expand />
        </div>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default Checkbox;
