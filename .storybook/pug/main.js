const rupture = require("rupture");
const postStylus = require("poststylus");
const path = require("path");

module.exports = {
  addons: ["@storybook/addon-docs/preset"],
  stories: [
    "../../src/stories/**/*.stories.mdx",
    "../../src/flavors/pug/**/*.stories.mdx",
    "../../src/flavors/pug/**/*.stories.js",
  ],

  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(
      path.resolve(__dirname, "../../src"),
      "node_modules"
    );

    config.module.rules.push({
      test: /\.styl$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "stylus-loader",
          options: {
            use: [postStylus(["rucksack-css", "autoprefixer"]), rupture()],
            preferPathResolver: "webpack",
          },
        },
      ],
    });

    /*   config.module.rules.push({
      test: /\.pug$/,
      use: [path.resolve(__dirname, './pug-loader.js')]
    }) */

    return config;
  },
};
