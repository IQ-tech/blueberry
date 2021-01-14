const rupture = require("rupture");
const postStylus = require("poststylus");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const babelConfig = require("./config-babel");

module.exports = {
	entry: "./src/main.js",
	output: {
		filename: "main.js",
		libraryTarget: "umd",
	},
	externals: {
		react: "react", //this config keeps react out of the bundle
		reactDOM: "react-dom",
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".ts", ".tsx", ".styl", ".json"],
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: [babelConfig],
				exclude: "/node_modules/",
			},
			{
				test: /\.js$/,
				use: [babelConfig],
				exclude: "/node_modules/",
			},
			{
				test: /\.styl$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "stylus-loader",
						options: {
							use: [postStylus(["rucksack-css", "autoprefixer"]), rupture()],
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
};
