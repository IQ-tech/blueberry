import React from "react";
import { CommonFieldsProps } from "../form-defs";
import FieldBase from "../FieldBase";
import classNames from "classnames";

type Modify<T, R> = Omit<T, keyof R> & R;

type ModifiedSelectProps = Modify<
  React.HTMLAttributes<HTMLSelectElement>,
  {
    onChange(value: string): void;
  }
>;

interface SelectFieldProps extends ModifiedSelectProps, CommonFieldsProps {
  options?: { label: string; value: string | number }[];
  onChange(value: string): void;
  value?: string | number;
}

const SelectField: React.FC<SelectFieldProps> = ({
  optional,
  label,
  placeholder = "Select",
  required,
  errorMessage,
  invalid,
  name,
  options = [],
  value = "",
  disabled,
  onChange,
  ...props
}) => {
  console.log(value);
  const componentClassName = classNames("iq-select-field", {
    "iq-select-field--empty": !value,
    "iq-select-field--invalid": !!invalid,
    "iq-select-field--disabled": !!disabled,
  });

  function onChangeHandler(e) {
    if (!!onChange) {
      console.log(onChange, e.target.value);
      onChange(e.target.value);
    }
  }

  return (
    <div className={componentClassName}>
      <FieldBase
        required={required}
        errorMessage={errorMessage}
        name={name}
        label={label}
        optional={optional}
        invalid={invalid}
      >
        <select
          className="iq-select-field__input"
          {...props}
          value={value}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          onChange={onChangeHandler}
        >
          <option disabled value="">
            {placeholder}
          </option>
          <option value="b">test</option>
          <option value="a">testa</option>
          {options.map((option) => {
            return (
              <option
                className="iq-select-field__option"
                value={option?.value}
                key={option?.value}
              >
                {option?.label}
              </option>
            );
          })}
        </select>
      </FieldBase>
    </div>
  );
};

export default SelectField;
