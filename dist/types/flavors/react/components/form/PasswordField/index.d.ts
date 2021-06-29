import React from "react";
import { CommonFieldsProps, ModifiedInputProps } from "../form-defs";
interface PasswordProps extends ModifiedInputProps, CommonFieldsProps {
    showEye?: boolean;
}
declare const PasswordField: React.FC<PasswordProps>;
export default PasswordField;
