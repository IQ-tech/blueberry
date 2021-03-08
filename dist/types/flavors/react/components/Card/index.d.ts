import * as React from "react";
interface CardComponentType<T> extends React.FC<T> {
    Section: React.FC;
}
interface CardSize {
    width: string;
    height: string;
}
interface CardComponentProps {
    dark?: boolean;
    /** Receives a hex, rgba, etc to define a custom background color */
    customBackgroundColor?: string;
    /** Receives a hex, rgba, etc to define a custom text color */
    customTextColor?: string;
    /** custom fixed size (px, em, rem, etc...) */
    fixedSize?: CardSize;
}
declare const Card: CardComponentType<CardComponentProps>;
export default Card;
