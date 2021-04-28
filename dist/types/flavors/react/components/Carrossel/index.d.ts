import React from "react";
interface CarrosselProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element[] | JSX.Element;
    type: "swipe" | "mixed" | "desktop";
    title?: string;
}
declare const Carrossel: React.FC<CarrosselProps>;
export default Carrossel;
