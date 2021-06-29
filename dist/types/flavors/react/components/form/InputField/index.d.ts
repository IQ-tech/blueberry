import React from "react";
import { maskArray } from "react-text-mask";
import { CommonFieldsProps } from "../form-defs";
interface InputProps extends React.HTMLAttributes<HTMLInputElement>, CommonFieldsProps {
    /** React-text-mask mask */
    mask?: maskArray | ((value: string) => maskArray);
    /** Set the html `type` attribute */
    htmlType?: string;
    /** Icon to render on the right side */
    icon?: React.FC<any>;
    customClass?: string;
    /** Icon to render on the left side */
    LeftIcon?: React.FC<any>;
}
declare const InputField: React.FC<InputProps>;
export default InputField;
