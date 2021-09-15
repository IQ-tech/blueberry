import React from "react";
import AutocompleteField from "../AutocompleteField";
import { AutoCompleteProps } from "../AutocompleteField/types";
import useEmailField from "./hook";

interface EmailFieldProps extends AutoCompleteProps {
  emailDomainsSuggestions: string[];
}

const EmailField: React.FC<EmailFieldProps> = ({
  emailDomainsSuggestions,
  ...props
}) => {
  const { handleOptions } = useEmailField({ emailDomainsSuggestions });
  return (
    <AutocompleteField {...props} type="email" modifyOptions={handleOptions} />
  );
};

export default EmailField;
