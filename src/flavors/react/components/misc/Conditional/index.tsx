import { Condition } from "webpack";

export interface ConditionalProps {
  /** condition to render something */
  condition: boolean;
  /** Content to render if true (Component, text, template) */
  renderIf: any;
  /** Content to render if false(Component, text, template) */
  renderElse?: any;
}

const Conditional = ({
  condition,
  renderIf,
  renderElse = null,
}: ConditionalProps) => {
  return condition ? renderIf : renderElse;
};

export default Conditional;
