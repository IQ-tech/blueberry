import AccordionDemo from "./demo/index.pug";
import * as AccordionController from "./controller";
import jails from "jails-js";

import "core/components/Accordion.styl";

export default {
	title: "Componentes/Accordion",
};

export const Default = () => {
	Promise.resolve().then((_) => {
		jails.register("iq-accordion", AccordionController);
		jails.start()
	});
	return AccordionDemo();
};
