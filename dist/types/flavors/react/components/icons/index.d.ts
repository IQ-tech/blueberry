import * as React from "react";
interface IconProps {
    width?: string;
    height?: string;
    style?: React.CSSProperties;
    iconMarkup?: string;
    iconName?: string;
    expand?: boolean;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
