const webpack = require("webpack");
const webpackProdConfig = require("../../config/webpack.prod");

/**
 * this task bundles all the iq react lib inside 'flavors' folder
 */
function bundleReactLibTask() {
	const customConfigs = {
		entry: "./src/flavors/react/index.js",
		output: {
			filename: "react/index.js",
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

module.exports = bundleReactLibTask;
