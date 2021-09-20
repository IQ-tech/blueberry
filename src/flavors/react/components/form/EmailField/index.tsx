import React from "react";
import AutocompleteField from "../AutocompleteField";
import { AutoCompleteProps } from "../AutocompleteField/types";
import useEmailField from "./hook";

interface EmailFieldProps extends AutoCompleteProps {
  emailDomainsSuggestions: string[];
}

const EmailField: React.FC<EmailFieldProps> = ({
  emailDomainsSuggestions,
  onChange,
  ...props
}) => {
  function handleOnChange(value = "") {
    if (!!onChange) onChange(value.toLowerCase());
  }
  const { handleOptions } = useEmailField({ emailDomainsSuggestions });
  return (
    <AutocompleteField
      {...props}
      onChange={handleOnChange}
      type="email"
      modifyOptions={handleOptions}
    />
  );
};

export default EmailField;
