import "core/fonts.styl";
import "core/components/legacy/HeaderClassic.styl";
import HeaderClassic from "./index.pug";
import HeaderClassicScript from "./script";

export default {
	title: "Componentes/legacy/HeaderClassic",
};

export const Default = () => {
	Promise.resolve().then((_) => HeaderClassicScript());
	return HeaderClassic();
};
