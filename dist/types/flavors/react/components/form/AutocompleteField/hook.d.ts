/// <reference types="react" />
import { AutoCompleteProps } from "./types";
export default function useAutocompleteField({ onFocus, onBlur, value, onChange, suggestionUse, options, modifyOptions, invalid, disabled, isLoading, }: AutoCompleteProps): {
    onFocusHandler: (e: any) => void;
    onBlurHandler: () => void;
    displayValue: import("react").ReactText;
    inputChangeHandler: (e: any) => void;
    shouldShowSuggestions: boolean;
    onSelectOptionHandler: (value: any) => void;
    inputClassName: string;
    displayOptions: any[];
    inputElement: import("react").MutableRefObject<any>;
};
