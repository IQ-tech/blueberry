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
  currentInputValue: string | number,
  options: Option[]
): Option[] {
  return options.filter((option) => {
    const stringfiedOption = String(option.value);
    const stringfiedValue = String(currentInputValue);
    const cleanedOptionValue = cleanString(stringfiedOption);
    const cleanedValue = cleanString(stringfiedValue);
    return (
      cleanedOptionValue.indexOf(cleanedValue) > -1 &&
      cleanedOptionValue !== cleanedValue
    );
  });
}
