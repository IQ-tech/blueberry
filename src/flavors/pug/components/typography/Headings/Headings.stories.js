import H1 from "./H1.pug";
import H2 from "./H2.pug";
import H3 from "./H3.pug";
import H4 from "./H4.pug";
import H5 from "./H5.pug";
import H6 from "./H6.pug";

import "core/components/typography/Headings.styl";

export default {
	title: "Componentes/typography/Headings",
};

export const HeadingOne = () => H1({});
export const HeadingTwo = () => H2({});
export const HeadingThree = () => H3({});
export const HeadingFour = () => H4({});
export const HeadingFive = () => H5({});
export const HeadingSix = () => H6({});

