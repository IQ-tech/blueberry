import React from "react";
import IconFilledError from "../../icons/generated/filled/FilledError";
import Conditional from "../../misc/Conditional";

interface FieldBaseProps {
  required?: boolean;
  errorMessage?: string;
  invalid?: boolean;
  name?: string;
  label?: string;
  optional?: boolean;
  icon?: React.FC<any>;
}

const FieldBase: React.FC<FieldBaseProps> = ({
  label,
  name,
  children,
  required,
  invalid,
  errorMessage,
  optional,
  icon,
}) => {
  const RenderIcon = IconFilledError || icon;

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
      {!!invalid && !!errorMessage ? (
        <p className="iq-field-base__error-message">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default FieldBase;
