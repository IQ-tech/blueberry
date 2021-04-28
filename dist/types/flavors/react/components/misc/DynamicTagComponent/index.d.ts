import * as React from "react";
interface DynamicTagComponentProps extends React.HTMLAttributes<HTMLElement> {
    /** Html tag that this component root should have */
    tag: string;
}
declare const DynamicTagComponent: React.FC<DynamicTagComponentProps>;
export default DynamicTagComponent;
