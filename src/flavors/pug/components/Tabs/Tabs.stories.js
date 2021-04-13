import jails from "jails-js";
import Tabs from "./index.pug";
import * as tabsController from "./controller"
import "core/components/Tabs.styl";

export default {
	title: "Componentes/tabs",
};

export const Primary = () => {
	Promise.resolve().then((_) => {
		jails.register("iq-tabs", tabsController);
		jails.start();
	});

	return Tabs();
};
