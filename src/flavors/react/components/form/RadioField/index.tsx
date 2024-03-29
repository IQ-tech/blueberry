import React, { useState } from "react";
import FieldBase from "../FieldBase";
import classNames from "classnames";

import { CommonFieldsProps, InputGroupOptions } from "../form-defs";
import { TooltipProps } from "../../Tooltip";

interface RadioFieldProps extends CommonFieldsProps {
  tooltipConfig?: TooltipProps;
  options: InputGroupOptions;
  onChange?: (...args: any) => void;
  onBlur?: (...args: any) => void;
  alignment: "vertical" | "horizontal";
  maxSize?: boolean;
  columns?: number | string;
  verticalGap?: number | string;
  horizontalGap?: number | string;
  defaultSelected?: number;
}

const getSafeName = (name: string): string => {
  return name ? name : `iq-radio-field-${Math.random()}`;
};

const RadioField: React.FC<RadioFieldProps> = ({
  required,
  errorMessage,
  name,
  label,
  optional,
  invalid,
  tooltipConfig,
  disabled,
  maxSize = true,
  options,
  columns,
  verticalGap,
  horizontalGap,
  value,
  onChange,
  onBlur,
}) => {
  const componentClass = classNames("iq-radio-field", {
    ["iq-radio-field--max-size"]: !!maxSize,
    ["iq-radio-field--disabled"]: !!disabled,
    ["iq-radio-field--invalid"]: !!invalid,
  });
  const [safeName] = useState(getSafeName(name));

  const containerStyle = (() => {
    const defaultStyle: React.CSSProperties = {};
    if (columns) {
      defaultStyle.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }
    if (verticalGap) {
      defaultStyle.rowGap = verticalGap;
    }

    if (horizontalGap) {
      defaultStyle.columnGap = horizontalGap;
    }
    return defaultStyle;
  })();

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (!!onBlur) {
      onBlur(e?.target?.value);
    }
  }

  return (
    <div className={componentClass}>
      <FieldBase
        required={required}
        errorMessage={errorMessage}
        name={safeName}
        label={label}
        optional={optional}
        invalid={invalid}
        tooltipConfig={tooltipConfig}
      >
        <div style={containerStyle} className="iq-radio-field__container">
          {options.map((option, index) => {
            const id = `iq-radio-option-${name}-${index}`;
            return (
              <div
                className="iq-radio-field__option"
                key={`item-radio-${safeName}-${index}`}
              >
                <label htmlFor={id} className="iq-radio-field__option-holder">
                  <input
                    className="iq-radio-field__input"
                    id={id}
                    name={safeName}
                    value={option?.value}
                    type="radio"
                    checked={value === option.value}
                    onChange={(e) => onChange(e?.target?.value)}
                    onBlur={handleBlur}
                    disabled={disabled}
                  />
                  <span className="iq-radio-field__icon" />
                  <span className="iq-radio-field__label">{option?.label}</span>
                </label>
              </div>
            );
          })}
        </div>
      </FieldBase>
    </div>
  );
};

export default RadioField;
