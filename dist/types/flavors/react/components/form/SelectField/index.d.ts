import React from "react";
import { CommonFieldsProps } from "../form-defs";
declare type Modify<T, R> = Omit<T, keyof R> & R;
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
}
declare const SelectField: React.FC<SelectFieldProps>;
export default SelectField;
