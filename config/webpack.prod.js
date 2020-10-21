/**
 * these configurations are used to compile the main design system lib files
 */

const rupture = require("rupture");
const postStylus = require("poststylus");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (anotherConfigurations = {}) =>
  merge([
    anotherConfigurations,
    {
      module: {
        rules: [
          {
            test: /\.styl$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "stylus-loader",
                options: {
                  use: [
                    postStylus(["rucksack-css", "autoprefixer"]),
                    rupture(),
                  ],
                  preferPathResolver: "webpack",
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "styles.css",
        }),
        new OptimizeCssAssetsPlugin({
          cssProcessor: require("cssnano"),
          cssProcessorPluginOptions: {
            preset: ["default", { discardComments: { removeAll: true } }],
          },
        }),
      ],
    },
  ]);
