import "core/fonts.styl";
import "core/components/legacy/FooterClassic.styl";
import FooterClassic from "./index.pug";
import FooterClassicScript from "./script";

export default {
	title: "Componentes/legacy/FooterClassic",
};

export const Default = () => {
	Promise.resolve().then((_) => FooterClassicScript());
	return FooterClassic();
};
