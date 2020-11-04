import React from "react";

import Example from "./index";
import "core/components/Example.styl";

export default {
	title: "Example/Example",
	component: Example,
};


const Template = (args) => <Example {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	content: "my-example-component",
};
