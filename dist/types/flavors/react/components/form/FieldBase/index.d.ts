import React from "react";
interface FieldBaseProps {
    required?: boolean;
    errorMessage?: string;
    invalid?: boolean;
    name?: string;
    label?: string;
    optional?: boolean;
}
declare const FieldBase: React.FC<FieldBaseProps>;
export default FieldBase;
