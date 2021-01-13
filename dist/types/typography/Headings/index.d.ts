import React from "react";
interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
    /** Defines de base color for the heading */
    type: "primary" | "secondary";
    /** Custom color to be aplied to the heading (Hex, RGB, RGBA...) */
    customColor?: string;
}
/** Heading components */
export declare const H1: React.FC<HeadingProps>;
export declare const H2: React.FC<HeadingProps>;
export declare const H3: React.FC<HeadingProps>;
export declare const H4: React.FC<HeadingProps>;
export declare const H5: React.FC<HeadingProps>;
export declare const H6: React.FC<HeadingProps>;
export {};
//# sourceMappingURL=index.d.ts.map