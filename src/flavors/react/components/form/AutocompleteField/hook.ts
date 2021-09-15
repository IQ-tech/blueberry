import { useState, useEffect, useRef } from "react";
import { AutoCompleteProps } from "./types";
import classNames from "classnames";
import { cleanString } from "../../../helpers/utils";
import { applyCustomFilter, applyDefaultFilter } from "./helpers";

export default function useAutocompleteField({
  onFocus,
  onBlur,
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
  const [isFieldFocused, setIsFieldFocused] = useState(false);
  const [currentValueIsAnOption, setCurrentValueIsAnOption] = useState(false);
  const [inputValue, setInputValue] = useState<string | number>("");
  const [displayOptions, setDisplayOptions] = useState([]);

  // Rules to show the dropdown
  const mandatoryChoiceShowrule =
    isFieldFocused &&
    (suggestionUse === "mandatory") === !currentValueIsAnOption;
  const regularShowrule =
    isFieldFocused && !!displayOptions.length && !currentValueIsAnOption;
  const shouldShowSuggestions = mandatoryChoiceShowrule || regularShowrule;

  useEffect(updateInternalInputValue, [value]);
  useEffect(onChangeEvent, [inputValue]);
  useEffect(filterOptionsHandler, [inputValue]);
  useEffect(checkIfCurrentValueIsAnOption, [inputValue, options]);

  // ---- Effects
  function updateInternalInputValue() {
    const safeValue = value || "";
    setInputValue(safeValue);
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
  function checkIfCurrentValueIsAnOption() {
    const isCurrentValueAnOption = options.some(
      (option) =>
        cleanString(String(option.value)) === cleanString(String(inputValue))
    );
    setCurrentValueIsAnOption(isCurrentValueAnOption);
  }

  // ---- Events
  function onFocusHandler(e) {
    if (!!onFocus) onFocus(e);
    if (!isFieldFocused) setIsFieldFocused(true);
  }

  function onBlurHandler(e) {
    if (!!onBlur) onBlur(e);
    setIsFieldFocused(false);
    const shouldDiscardValue =
      suggestionUse === "mandatory" && !currentValueIsAnOption;

    if (shouldDiscardValue) setInputValue("");
  }

  function onChangeEvent() {
    /* console.log(inputValue) */
    if (suggestionUse === "optional" && !!onChange) {
      onChange(inputValue);
    }
  }

  function onSelectOptionHandler(value) {
    const formatted = String(value).toLowerCase();
    setInputValue(formatted);
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
