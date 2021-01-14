const webpack = require("webpack");
const webpackProdConfig = require("../../config/webpack.prod");

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
