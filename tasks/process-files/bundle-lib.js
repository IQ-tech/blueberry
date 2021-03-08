const webpack = require("webpack");
const webpackProdConfig = require("../../config/webpack.prod");

const webpackLoggingOptions = {
	assets: true,
	cached: false,
	children: false,
	chunks: false,
	chunkModules: false,
	colors: true,
	hash: true,
	modules: false,
	reasons: false,
	source: false,
	timings: true,
	version: true,
};

/**
 * This task bundles all the js (also json, ts, tsx) code into a
 * single js bundle (main.js) in the dist folder.
 *
 * it also compile all stylus code into a single iq-design-system.css file
 */
function bundleLibTask(cb) {
	const compiler = webpack(webpackProdConfig);

	compiler.run((err, stats) => {
		console.log(stats.toString(webpackLoggingOptions));
		if (err) {
			console.error(err.stack || err);
			if (err.details) {
				console.error(err.details);
			}
			throw new Error("bundling failed");
		} else {
			cb();
		}
	});
}

module.exports = bundleLibTask;
