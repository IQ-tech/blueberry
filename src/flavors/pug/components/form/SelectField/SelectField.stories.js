import SelectFieldDefault from "./Demos/Default.pug";
import SelectFieldScript from "./script";

import "core/components/Form.styl";

export default {
	title: "Componentes/form/SelectField",
};

export const Default = () => {
	Promise.resolve().then((_) => SelectFieldScript());
	return SelectFieldDefault();
};
