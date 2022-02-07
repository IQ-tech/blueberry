const path = require("path");


module.exports = (config) => {
	config.resolve.modules.push(
		path.resolve(__dirname, "../../src"),
		"node_modules"
	);

	config.module.rules.push({
		test: /\.styl$/,
		use: [
			"style-loader",
			"css-loader",
			{
				loader: "stylus-loader",
				options: {
					preferPathResolver: "webpack",
				},
			},
		],
	});

	config.module.rules.push({
		test: /\.pug$/,
		use: [path.resolve(__dirname, "./pug-loader.js")],
	});
};
