const rupture = require("rupture");
const postStylus = require("poststylus");
const path = require("path");

const baseStylesFile = path.resolve(
	__dirname,
	"../../src/core/base-styles/main.styl"
);

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
					use: [postStylus(["rucksack-css", "autoprefixer"]), rupture()],
					import: [
						// load base styles into the playground
						baseStylesFile,
					],
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
