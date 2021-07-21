import React from "react";
import { CommonFieldsProps, InputGroupOptions } from "../form-defs";
import { TooltipProps } from "../../Tooltip";
interface RadioFieldProps extends CommonFieldsProps {
    tooltipConfig?: TooltipProps;
    options: InputGroupOptions;
    onChange?: (...args: any) => void;
    alignment: "vertical" | "horizontal";
    maxSize?: boolean;
    columns?: number | string;
    verticalGap?: number | string;
    horizontalGap?: number | string;
    defaultSelected?: number;
}
declare const RadioField: React.FC<RadioFieldProps>;
export default RadioField;
