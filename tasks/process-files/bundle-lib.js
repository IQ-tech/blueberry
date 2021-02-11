const webpack = require("webpack");
const webpackProdConfig = require("../../config/webpack.prod");

/**
 * This task bundles all the js (also json, ts, tsx) code into a
 * single js bundle (main.js) in the dist folder.
 *
 * it also compile all stylus code into a single iq-design-system.css file
 */
function bundleLibTask(cb) {
	const compiler = webpack(webpackProdConfig);

	compiler.run((err) => {
		if (err) {
			throw new Error(
				"Webpack compiling failed, run `yarn only-bundle` to see the details"
			);
		} else {
			cb();
		}
	});
}

module.exports = bundleLibTask;
