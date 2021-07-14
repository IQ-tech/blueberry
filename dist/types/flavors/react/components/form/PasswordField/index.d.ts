import React from "react";
import { CommonFieldsProps, ModifiedInputProps } from "../form-defs";
import { TooltipProps } from "../../Tooltip";
interface PasswordProps extends ModifiedInputProps, CommonFieldsProps {
    showEye?: boolean;
    tooltipConfig?: TooltipProps;
}
declare const PasswordField: React.FC<PasswordProps>;
export default PasswordField;
