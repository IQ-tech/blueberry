const webpack = require("webpack");
const webpackProdConfig = require("../../config/webpack.prod");

/**
 * this task bundles all the iq lib styl files into a single
 * styles.css
 */
function compileStylesFileTask() {
	const customConfigs = {
		entry: "./src/main.js",
		output: {
			filename: "main.js",
			libraryTarget: "umd",
		},
	};

	const webpackConfig = webpackProdConfig(customConfigs);

	const compiler = webpack(webpackConfig);

	return new Promise((res, rej) => {
		compiler.run((err) => {
			if (err) {
				rej(err);
			}
			res();
		});
	});
}

module.exports = compileStylesFileTask;
