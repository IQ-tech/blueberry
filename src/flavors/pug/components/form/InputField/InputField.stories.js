import InputFieldDefault from "./Demos/Default.pug";
import InputFieldInvalid from "./Demos/Invalid.pug";
import InputFieldOptional from "./Demos/Optional.pug";
import InputFieldRequired from "./Demos/Required.pug";

import "core/components/Form.styl";

export default {
	title: "Componentes/form/InputField",
};

export const Default = () => InputFieldDefault();
export const Invalid = () => InputFieldInvalid();
export const Required = () => InputFieldRequired();
export const Optional = () => InputFieldOptional();
