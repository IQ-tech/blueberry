import React from "react";
interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    invalid?: boolean;
    isChecked?: boolean;
    name?: string;
    label: string | number;
    required?: boolean;
    errorMessage?: string;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
