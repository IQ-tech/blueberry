import React from "react";
import { CommonFieldsProps } from "../form-defs";
import FieldBase from "../FieldBase";
import classNames from "classnames";
import OutlineAngleDown from "../../icons/generated/outline/OutlineAngleDown";

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
  placeholder,
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
  const safeValue = value || "";
  const safePlaceholder = placeholder || "Selecione";
  const componentClassName = classNames("iq-select-field", {
    "iq-select-field--empty": !value,
    "iq-select-field--invalid": !!invalid,
    "iq-select-field--disabled": !!disabled,
  });

  function onChangeHandler(e) {
    if (!!onChange) {
      onChange(e?.target?.value);
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
        <div className="iq-select-field__select-holder">
          <select
            className="iq-select-field__input"
            {...props}
            value={safeValue}
            disabled={disabled}
            required={required}
            placeholder={safePlaceholder}
            onChange={onChangeHandler}
          >
            <option disabled value="">
              {safePlaceholder}
            </option>
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
          <div className="iq-select-field__icon-holder">
            <OutlineAngleDown />
          </div>
        </div>
      </FieldBase>
    </div>
  );
};

export default SelectField;
