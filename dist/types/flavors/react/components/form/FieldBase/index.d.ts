import React from "react";
import { TooltipProps } from "../../Tooltip";
interface FieldBaseProps {
    required?: boolean;
    errorMessage?: string;
    invalid?: boolean;
    name?: string;
    label?: string;
    optional?: boolean;
    tooltipConfig?: TooltipProps;
}
declare const FieldBase: React.FC<FieldBaseProps>;
export default FieldBase;
