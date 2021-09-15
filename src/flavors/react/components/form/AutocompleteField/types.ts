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
  /** Tells if the selection of a dropdown option is mandatory or optional */
  suggestionUse?: "mandatory" | "optional";
  /** Options to be suggested */
  options?: Option[];
  /** Config to tooltip */
  tooltipConfig?: TooltipProps;
  /** Set loading state */
  isLoading?: boolean;
  /** function used to modify suggestion options */
  modifyOptions?: ModifyOptionFunc;
}
