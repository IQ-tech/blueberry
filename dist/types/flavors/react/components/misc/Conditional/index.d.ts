export interface ConditionalProps {
    /** condition to render something */
    condition: boolean;
    /** Content to render if true (Component, text, template) */
    renderIf: any;
    /** Content to render if false(Component, text, template) */
    renderElse?: any;
}
declare const Conditional: ({ condition, renderIf, renderElse, }: ConditionalProps) => any;
export default Conditional;
//# sourceMappingURL=index.d.ts.map