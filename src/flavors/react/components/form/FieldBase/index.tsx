import React from "react";
import Conditional from "../../misc/Conditional";

interface FieldBaseProps {
  required?: boolean;
  errorMessage?: string;
  invalid?: boolean;
  name?: string;
  label?: string;
  optional?: boolean;
}

const FieldBase: React.FC<FieldBaseProps> = ({
  label,
  name,
  children,
  required,
  invalid,
  errorMessage,
  optional,
}) => {
  return (
    <div className="iq-field-base">
      <Conditional
        condition={!!label}
        renderIf={
          <label className="iq-field-base__label" htmlFor={name}>
            {label}
            <Conditional
              condition={!!required}
              renderIf={<span className="iq-field-base__required"> *</span>}
              renderElse={
                <Conditional
                  condition={!!optional}
                  renderIf={
                    <span className="iq-field-base__optional"> (Opcional)</span>
                  }
                />
              }
            />
          </label>
        }
      />

      <div className="iq-field-base__input-holder">{children}</div>
      <Conditional
        condition={!!invalid && !!errorMessage}
        renderIf={
          <p className="iq-field-base__error-message">{errorMessage}</p>
        }
      />
    </div>
  );
};

export default FieldBase;
