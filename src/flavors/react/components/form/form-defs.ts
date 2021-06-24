export interface CommonFieldsProps {
  name?: string;
  optional?: boolean;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  /** input value */
  value?: string | number;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  errorMessage?: string;
}
