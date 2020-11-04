const webpack = require("webpack");
const webpackProdConfig = require("../../config/webpack.prod");

/**
 * this task bundles all the iq lib styl files into a single
 * styles.css
 */
function compileStylesFileTask() {
	const entryFile = "./src/core/index.js";
	const webpackConfig = webpackProdConfig({
		entry: entryFile,
	});

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
