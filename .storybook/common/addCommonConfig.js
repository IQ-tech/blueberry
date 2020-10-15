const rupture = require("rupture");
const postStylus = require("poststylus");
const path = require("path");

module.exports = (config) => {
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
};
