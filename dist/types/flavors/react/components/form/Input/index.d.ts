import React from "react";
import { maskArray } from "react-text-mask";
import { CommonFieldsProps } from "../form-defs";
interface InputProps extends React.HTMLAttributes<HTMLInputElement>, CommonFieldsProps {
    mask?: maskArray | ((value: string) => maskArray);
    htmlType?: string;
    errorMessage?: string;
    icon?: React.FC<any>;
}
declare const Input: React.FC<InputProps>;
export default Input;
