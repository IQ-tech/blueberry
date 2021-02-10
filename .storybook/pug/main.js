const addCommonConfig = require("../common/addCommonConfig");
const path = require("path");

module.exports = {
  addons: ["@storybook/addon-docs/preset"],
  stories: [
    "../../src/stories/**/*.stories.mdx",
    "../../src/flavors/pug/**/*.stories.mdx",
    "../../src/flavors/pug/**/*.stories.js",
  ],

  webpackFinal: async (config, { configType }) => {
    addCommonConfig(config);

    return config;
  },
};
