import { useState, useEffect, useRef } from "react";
import { AutoCompleteProps, Option, ModifyOptionFunc } from "./types";
import classNames from "classnames";
import levenshtein from "fast-levenshtein";
import { cleanString } from "../../../helpers/utils";

export default function useAutocompleteField({
  onFocus,
  onBlur,
  openDropdownOnFocus,
  value,
  onChange,
  suggestionUse = "optional",
  options,
  modifyOptions,
  invalid,
  disabled,
}: AutoCompleteProps) {
  const inputClassName = classNames("iq-input-field", {
    "iq-input-field--invalid": !!invalid,
    "iq-input-field--disabled": !!disabled,
  });
  const inputElement = useRef(null);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string | number>("");
  const [displayOptions, setDisplayOptions] = useState([]);
  const shouldShowSuggestions = !!isSuggestionsOpen && !!displayOptions.length;

  useEffect(() => {
    const safeValue = value || "";
    setInputValue(safeValue);
  }, [value]);

  useEffect(() => {
    if (suggestionUse === "optional" && !!onChange) {
      onChange(inputValue);
    }
  }, [inputValue]);

  useEffect(filterOptionsHandler, [inputValue]);

  function onFocusHandler(e) {
    console.log("cenoura");
    if (!!onFocus) onFocus(e);
    if (!!openDropdownOnFocus) {
      setIsSuggestionsOpen(true);
    }
  }

  function onBlurHandler(e) {
    if (!!onBlur) onBlur(e);

    if (isSuggestionsOpen) {
      setIsSuggestionsOpen(false);
    }
  }

  function filterOptionsHandler() {
    const processedOptions = !!modifyOptions
      ? applyCustomFilter(inputValue, options, modifyOptions)
      : applyDefaultFilter(inputValue, options);

    setDisplayOptions(processedOptions);
  }

  function inputChangeHandler(e) {
    setInputValue(e?.target?.value);
  }

  function onSelectOptionHandler(value) {
    setInputValue(value);
    setIsSuggestionsOpen(false);
  }

  function onInputClickHandler() {
    if (!isSuggestionsOpen) {
      setIsSuggestionsOpen(true);
    }
  }

  return {
    isSuggestionsOpen,
    onFocusHandler,
    onBlurHandler,
    inputValue,
    inputChangeHandler,
    shouldShowSuggestions,
    onSelectOptionHandler,
    onInputClickHandler,
    inputClassName,
    displayOptions,
    inputElement,
  };
}

function applyCustomFilter(
  currentInputValue,
  options: Option[],
  modifierFunction: ModifyOptionFunc
): Option[] {
  return options
    .map((option) => modifierFunction(currentInputValue, option))
    .filter((option) => !!option);
}

function applyDefaultFilter(
  currentInputValue: string | number,
  options: Option[]
): Option[] {
  return options.filter((option) => {
    const stringfiedOption = String(option.value);
    const stringfiedValue = String(currentInputValue);
    const cleanedOptionValue = cleanString(stringfiedOption);
    const cleanedValue = cleanString(stringfiedValue);
    return cleanedOptionValue.indexOf(cleanedValue) > -1;
  });
}
