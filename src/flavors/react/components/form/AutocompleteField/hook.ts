import { useState, useEffect } from "react";

export default function useAutocompleteField({
  onFocus,
  onBlur,
  openDropdownOnFocus,
  value,
  onChange,
  suggestionUse,
  options,
}) {
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const shouldShowSuggestions = !!isSuggestionsOpen && !!options;

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (suggestionUse === "optional" && !!onChange) {
      onChange(inputValue);
    }
  }, [inputValue]);

  function onFocusHandler(e) {
    if (!!onFocus) onFocus();
    if (!!openDropdownOnFocus) {
      setIsSuggestionsOpen(true);
    }
  }

  function onBlurHandler(e) {
    if (!!onBlur) onBlur();

    if (isSuggestionsOpen) {
      setIsSuggestionsOpen(false);
    }
  }

  function defaultFilterOptionsFunction() {
    // run every time the current value change
    // make filter option here
  }

  function inputChangeHandler(e) {
    setInputValue(e?.target?.value);
  }

  return {
    isSuggestionsOpen,
    onFocusHandler,
    onBlurHandler,
    inputValue,
    inputChangeHandler,
    shouldShowSuggestions,
  };
}
