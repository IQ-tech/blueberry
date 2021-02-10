const webpack = require("webpack");
const webpackProdConfig = require("../../config/webpack.prod");

/**
 * This task bundles all the js (also json, ts, tsx) code into a
 * single js bundle (main.js) in the dist folder.
 *
 * it also compile all stylus code into a single iq-design-system.css file
 */
function bundleLibTask() {
	const compiler = webpack(webpackProdConfig);

	return new Promise((res, rej) => {
		compiler.run((err) => {
			if (err) {
				rej(err);
			}
			res();
		});
	});
}

module.exports = bundleLibTask;
