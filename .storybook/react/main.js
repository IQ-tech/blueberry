const addCommonConfig = require("../common/addCommonConfig");

module.exports = {
	stories: [
		"../../src/stories/**/*.stories.mdx",
		"../../src/flavors/react/**/*.stories.mdx",
		"../../src/flavors/react/**/*.stories.js",
		"../../src/flavors/react/**/*.stories.tsx",
	],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
	webpackFinal: async (config, { configType }) => {
		addCommonConfig(config);

		return config;
	},
};
