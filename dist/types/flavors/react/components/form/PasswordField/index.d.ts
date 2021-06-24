import React from "react";
import { CommonFieldsProps } from "../form-defs";
interface PasswordProps extends React.HTMLAttributes<HTMLInputElement>, CommonFieldsProps {
    showEye?: boolean;
}
declare const PasswordField: React.FC<PasswordProps>;
export default PasswordField;
