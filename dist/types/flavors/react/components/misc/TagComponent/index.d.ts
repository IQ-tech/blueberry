import * as React from "react";
interface TagComponentProps extends React.HTMLAttributes<HTMLElement> {
    /** Html tag that this component root should have */
    tag: string;
}
declare const TagComponent: React.FC<TagComponentProps>;
export default TagComponent;
