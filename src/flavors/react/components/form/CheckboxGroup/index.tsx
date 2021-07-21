import React, { useState, useEffect } from "react";
import FieldBase from "../FieldBase";
import {
  CommonFieldsProps,
  InputGroupOptions,
  InputGroupOption,
} from "../form-defs";
import { TooltipProps } from "../../Tooltip";
import Checkbox from "../Checkbox";

interface CheckBoxGroupProps extends CommonFieldsProps {
  tooltipConfig?: TooltipProps;
  options: InputGroupOptions;
  onChange?: (...args: any) => void;
}

const CheckboxGroup: React.FC<CheckBoxGroupProps> = ({
  name,
  label,
  required,
  errorMessage,
  optional,
  invalid,
  tooltipConfig,
  options = [],
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const returnResponse = Object.keys(selectedOptions)
      .map((itemKey) => selectedOptions[itemKey])
      .filter((item) => !!item);

    if (!!onChange) onChange(returnResponse);
  }, [selectedOptions]);

  function handleSelectValue(
    checked: any,
    item: InputGroupOption,
    itemIndex: number
  ) {
    setSelectedOptions({
      ...selectedOptions,
      [itemIndex]: checked ? item : false,
    });
  }

  return (
    <div className="iq-checkbox-group">
      <FieldBase
        required={required}
        errorMessage={errorMessage}
        name={name}
        label={label}
        optional={optional}
        invalid={invalid}
        tooltipConfig={tooltipConfig}
      >
        <div className="iq-checkbox-group__container">
          {options.map(({ label, value }, i) => (
            <Checkbox
              label={label}
              key={`checkbox-group-${i}`}
              onChange={(checked) =>
                handleSelectValue(checked, { value, label }, i)
              }
            />
          ))}
        </div>
      </FieldBase>
    </div>
  );
};

export default CheckboxGroup;
