import { Option, ModifyOptionFunc } from "./types";
import { cleanString } from "../../../helpers/utils";

export function applyCustomFilter(
  currentInputValue,
  options: Option[],
  modifierFunction: ModifyOptionFunc
): Option[] {
  return options
    .map((option) => modifierFunction(currentInputValue, option))
    .filter((option) => !!option);
}

export function applyDefaultFilter(
  currentDisplayValue: string | number,
  options: Option[]
): Option[] {
  const newOptions = options.filter((option) => {
    const stringfiedOption = String(option.label);
    const stringfiedValue = String(currentDisplayValue);
    const cleanedOptionValue = cleanString(stringfiedOption);
    const cleanedValue = cleanString(stringfiedValue);
    return (
      cleanedOptionValue.indexOf(cleanedValue) > -1 
    );
  });
  return newOptions;
}
