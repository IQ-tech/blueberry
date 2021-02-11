const webpackConfig = require("../../../../config/webpack.prod");
const fs = require("fs");
const webpack = require("webpack");
const path = require("path");

const iconsFilesFolderPath = "./src/flavors/react/components/icons/generated";

module.exports = function generateDistIconsTask(cb) {
	const generateIconsFiles = fs.readdirSync(iconsFilesFolderPath);

	const newInputFiles = generateIconsFiles.reduce((acc, nextPath) => {
		const filename = path.parse(nextPath).name;

		return {
			...acc,
			[filename]: `${iconsFilesFolderPath}/${nextPath}`,
		};
	}, {});

	const newWebpackConfig = {
		...webpackConfig,
		entry: { ...newInputFiles },
		output: {
			path: path.resolve(__dirname, "../../../../dist/reactIcons"),
			filename: "[name].js",
		},
	};

	const compiler = webpack(newWebpackConfig);

	compiler.run((err) => {
		if (err) {
			throw new Error(
				"`generateDistIconsTask` task failed, React icons transpiling didn't work  "
			);
		}
		cb();
	});
};
