import { CommonFieldsProps, ModifiedInputProps } from "../form-defs";
import { TooltipProps } from "../../Tooltip";

export interface Option {
  value: string | number;
  label: string | number;
}

export type ModifyOptionFunc = (
  currentInputValue: string | number,
  options: Option
) => Option | null;

export interface AutoCompleteProps
  extends CommonFieldsProps,
    ModifiedInputProps {
  suggestionUse?: "mandatory" | "optional";
  options?: Option[];
  tooltipConfig?: TooltipProps;
  openDropdownOnFocus?: boolean;
  isLoading?: boolean;
  modifyOptions?: ModifyOptionFunc;
}
