import { useState, useEffect, useRef } from "react";
import { AutoCompleteProps } from "./types";
import classNames from "classnames";
import { applyDefaultFilter } from "./helpers";

export default function useAutocompleteField({
  onFocus,
  onBlur,
  value,
  onChange,
  suggestionUse = "optional",
  options = [],
  modifyOptions,
  invalid,
  disabled,
  isLoading,
}: AutoCompleteProps) {
  const inputClassName = classNames("iq-input-field", {
    "iq-input-field--invalid": !!invalid,
    "iq-input-field--disabled": !!disabled,
  });
  const inputElement = useRef(null);
  const [isFieldFocused, setIsFieldFocused] = useState(false);
  const [currentValueIsAnOption, setCurrentValueIsAnOption] = useState(false);
  // display value
  const [displayValue, setDisplayValue] = useState<string | number>("");
  const [fieldValue, setFieldValue] = useState("");
  const [displayOptions, setDisplayOptions] = useState([]);

  // Rules to show the dropdown
  const mandatoryChoiceShowrule =
    isFieldFocused && suggestionUse === "mandatory" && !currentValueIsAnOption;

  const regularShowrule =
    isFieldFocused && displayOptions.length > 0 && !currentValueIsAnOption;
  const shouldShowSuggestions =
    (mandatoryChoiceShowrule || regularShowrule) && !isLoading;

  const shouldShowNotFoundIcon =
    mandatoryChoiceShowrule && !displayOptions.length;

  useEffect(onChangeEvent, [fieldValue]);
  // fix filter problems
  useEffect(filterOptionsHandler, [displayValue, options]);
  useEffect(handleCustomFilter, [displayValue]);

  useEffect(updateFieldValue, [displayValue]);
  useEffect(updateInternalInputLabel, [value]);
  useEffect(checkIfCurrentValueIsAnOption, [displayValue, options]);

  // ---- Effects
  function updateInternalInputLabel() {
    const safeValue = value || "";
    const optionValue = options.find((option) => option.value === value);
    if (!!optionValue) {
      setDisplayValue(optionValue.label);
    } else {
      setDisplayValue(safeValue);
    }
  }

  function updateFieldValue() {
    const option = options.find((option) => option.label === displayValue);
    if (!!option) {
      setFieldValue(String(option.value));
    } else {
      setFieldValue(String(displayValue));
    }
  }

  function filterOptionsHandler() {
    if (!modifyOptions) {
      const filtered = applyDefaultFilter(displayValue, options);
      setDisplayOptions(filtered);
    }
  }

  function handleCustomFilter() {
    if (!!modifyOptions) {
      const newOptions = modifyOptions(displayValue, options);
      setDisplayOptions(newOptions);
    }
  }

  function inputChangeHandler(e) {
    setDisplayValue(e?.target?.value);
  }

  function checkIfCurrentValueIsAnOption() {
    const isCurrentValueAnOption = options.some(
      (option) => option.label === displayValue
    );
    setCurrentValueIsAnOption(isCurrentValueAnOption);
  }

  // ---- Events
  function onFocusHandler(e) {
    if (!!onFocus) onFocus(e);
    if (!isFieldFocused) setIsFieldFocused(true);
  }

  function onBlurHandler() {
    setIsFieldFocused(false);
    const shouldDiscardValue =
      suggestionUse === "mandatory" && !currentValueIsAnOption;
    if (shouldDiscardValue) setDisplayValue("");
    const valueToDispatch = shouldDiscardValue ? "" : fieldValue;
    if (!!onBlur) onBlur(valueToDispatch as any);
  }

  function onChangeEvent() {
    if (isFieldFocused) {
      const conditionToRunOnChange =
        (suggestionUse === "optional" ||
          (suggestionUse === "mandatory" && currentValueIsAnOption)) &&
        !!onChange;

      const valueToPass = currentValueIsAnOption
        ? options.find((option) => option.label === displayValue).value
        : fieldValue;

      if (!!conditionToRunOnChange) {
        onChange(valueToPass);
      }
    }
  }

  function onSelectOptionHandler(value) {
    const formatted = String(value);

    setDisplayValue(formatted);
  }

  return {
    onFocusHandler,
    onBlurHandler,
    displayValue,
    inputChangeHandler,
    shouldShowSuggestions,
    onSelectOptionHandler,
    inputClassName,
    displayOptions,
    inputElement,
    shouldShowNotFoundIcon,
  };
}
