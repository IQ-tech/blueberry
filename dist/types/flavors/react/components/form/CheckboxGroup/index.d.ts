import React from "react";
import { CommonFieldsProps, InputGroupOptions } from "../form-defs";
import { TooltipProps } from "../../Tooltip";
interface CheckBoxGroupProps extends CommonFieldsProps {
    tooltipConfig?: TooltipProps;
    options: InputGroupOptions;
    onChange?: (...args: any) => void;
}
declare const CheckboxGroup: React.FC<CheckBoxGroupProps>;
export default CheckboxGroup;
