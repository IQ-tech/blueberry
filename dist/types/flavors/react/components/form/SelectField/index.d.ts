import React from "react";
import { CommonFieldsProps, Modify } from "../form-defs";
import { TooltipProps } from "../../Tooltip";
declare type ModifiedSelectProps = Modify<React.HTMLAttributes<HTMLSelectElement>, {
    onChange(value: string): void;
}>;
interface SelectFieldProps extends ModifiedSelectProps, CommonFieldsProps {
    options?: {
        label: string;
        value: string | number;
    }[];
    onChange(value: string): void;
    value?: string | number;
    tooltipConfig?: TooltipProps;
}
declare const SelectField: React.FC<SelectFieldProps>;
export default SelectField;
