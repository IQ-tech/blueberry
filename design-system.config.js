module.exports = {
  // folder that holds the lib content (styles, react components, pug templates, etc...)
  lib: {
    distFolder: "./dist",
  },
  // storybook dev configs
  storybook: {
    distFolder: "./build",
    devServer: {
      pug: {
        port: "6006",
      },
      react: {
        port: "6008",
      },
    },
  },
};
