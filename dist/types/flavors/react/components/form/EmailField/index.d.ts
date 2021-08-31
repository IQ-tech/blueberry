import React from "react";
import { CommonFieldsProps } from "../form-defs";
import { TooltipProps } from "../../Tooltip";
import { ModifiedInputProps } from "../form-defs";
interface EmailFieldProps extends ModifiedInputProps, CommonFieldsProps {
    /** Set the html `type` attribute */
    htmlType?: string;
    /** Icon to render on the right side */
    Icon?: React.FC<any>;
    customClass?: string;
    /** Icon to render on the left side */
    LeftIcon?: React.FC<any>;
    tooltipConfig?: TooltipProps;
    /** Domain autosuggetion array */
    autoSuggestionOptions: string[];
    /** Function to change payload value */
    handleSetSuggestion?: (value: string) => void;
}
declare const EmailField: React.FC<EmailFieldProps>;
export default EmailField;
