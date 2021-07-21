import React from "react";
export interface CommonFieldsProps {
    name?: string;
    optional?: boolean;
    required?: boolean;
    placeholder?: string;
    autoComplete?: string;
    /** input value */
    value?: string | number;
    disabled?: boolean;
    invalid?: boolean;
    label?: string;
    errorMessage?: string;
}
export declare type Modify<T, R> = Omit<T, keyof R> & R;
export declare type ModifiedInputProps = Modify<React.HTMLAttributes<HTMLInputElement>, {
    onChange(value: string): void;
}>;
export declare type InputGroupOption = {
    value: string | number;
    label: string | number;
};
export declare type InputGroupOptions = InputGroupOption[];
