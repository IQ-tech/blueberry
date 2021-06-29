import React from "react";
interface SearchFieldProps {
    onChange(value: string): void;
    placeholder?: string;
    loading?: boolean;
}
declare const SearchField: React.FC<SearchFieldProps>;
export default SearchField;
