const rupture = require("rupture");
const postStylus = require("poststylus");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const babelConfig = {
	loader: "babel-loader",
	options: {
		presets: [
			"@babel/preset-react",
			"@babel/preset-typescript",
			[
				"@babel/preset-env",
				{
					targets: {
						browsers: ["last 2 versions"],
					},
					modules: false,
				},
			],
		],
	},
};

// the custom configurations param is passed by some specific bundle tasks such as `bundle-components` task
module.exports = (customConfigurations = {}) =>
	merge([
		customConfigurations,
		{
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
