import * as React from "react";
export interface TooltipProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: "light" | "dark";
    desc: string;
    placement?: "top" | "topLeft" | "bottom" | "bottomLeft" | "left" | "right";
    title: string;
    trigger?: string[];
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
