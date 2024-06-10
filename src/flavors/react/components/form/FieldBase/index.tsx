import React, {KeyboardEvent, useCallback, useState} from "react";
import Conditional from "../../misc/Conditional";
import Tooltip, { TooltipProps } from "../../Tooltip";

interface FieldBaseProps {
  required?: boolean;
  errorMessage?: string;
  invalid?: boolean;
  name?: string;
  label?: string;
  optional?: boolean;
  tooltipConfig?: TooltipProps;
}

const FieldBase: React.FC<FieldBaseProps> = ({
  label,
  name,
  children,
  required,
  invalid,
  errorMessage,
  optional,
  tooltipConfig,
}) => {

  return (
    <div className="iq-field-base">
      <div className="iq-field-base__label-holder">
        {!!label ? (
          <label className="iq-field-base__label" htmlFor={name}>
            {label}
            {!!required ? (
              <span className="iq-field-base__required"> *</span>
            ) : !!optional ? (
              <span className="iq-field-base__optional"> (Opcional)</span>
            ) : null}
          </label>
        ) : null}
        {!!tooltipConfig ? <Tooltip {...tooltipConfig} /> : null}
      </div>

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