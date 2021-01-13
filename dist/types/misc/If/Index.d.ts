export interface IfProps {
    /** condition to render something */
    condition: boolean;
    /** Content to render if true (Component, text, template) */
    renderIf: any;
    /** Content to render if false(Component, text, template) */
    renderElse?: any;
}
declare const If: ({ condition, renderIf, renderElse }: IfProps) => any;
export default If;
//# sourceMappingURL=Index.d.ts.map