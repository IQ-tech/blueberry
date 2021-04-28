import DemoOne from "./demos/DemoOne.pug";
import DemoTwo from "./demos/DemoTwo.pug";
import FluidGrid from "./demos/FluidGrid.pug";
import "core/components/FlexGrid.styl";

export default {
	title: "Componentes/layout/Grid",
};

export const Fixed = () => DemoOne({});

export const Fluid = () => FluidGrid({});

export const ColumnExample = () => DemoTwo({});
