module.exports = {
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
