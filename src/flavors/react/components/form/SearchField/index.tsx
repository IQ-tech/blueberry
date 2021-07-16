import React from "react";
import classNames from "classnames";

import InputField from "../InputField";
import OutlineSearch from "../../icons/generated/outline/OutlineSearch";
import MiscSearchLoader from "../../icons/generated/misc/MiscSearchLoader";

interface SearchFieldProps {
  onChange(value: string): void;
  placeholder?: string;
  loading?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({
  onChange,
  placeholder,
  loading,
}) => {
  const componentClass = classNames("iq-search-field", {
    "iq-search-field--loading": !!loading,
  });

  const Loader = () => !!loading ? (
    <div className="iq-search-field__loader-holder">
      <MiscSearchLoader expand />
    </div>
  ): null;

  return (
    <InputField
      customClass={componentClass}
      LeftIcon={OutlineSearch}
      onChange={onChange}
      placeholder={placeholder}
      Icon={Loader}
    />
  );
};

export default SearchField;
