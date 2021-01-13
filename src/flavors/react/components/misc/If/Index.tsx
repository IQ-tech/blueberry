export interface IfProps {
  /** condition to render something */
  condition: boolean;
  /** Content to render if true (Component, text, template) */
  renderIf: any;
  /** Content to render if false(Component, text, template) */
  renderElse?: any;
}

const If = ({ condition, renderIf, renderElse = null }: IfProps) => {
  return condition ? renderIf : renderElse;
};

export default If;
