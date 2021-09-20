import React from "react";
import { AutoCompleteProps } from "../AutocompleteField/types";
interface EmailFieldProps extends AutoCompleteProps {
    emailDomainsSuggestions: string[];
}
declare const EmailField: React.FC<EmailFieldProps>;
export default EmailField;
