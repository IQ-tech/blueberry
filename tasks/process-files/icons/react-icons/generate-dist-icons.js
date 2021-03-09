const webpackConfig = require("../../../../config/webpack.prod");
const fs = require("fs");
const webpack = require("webpack");
const path = require("path");

const iconsFilesFolderPath = "./src/flavors/react/components/icons/generated";

module.exports = function generateDistIconsTask(cb) {
	const generatedIconCollections = fs.readdirSync(iconsFilesFolderPath) || [];
	const onlyCollectionFolders = generatedIconCollections.filter(
		(item) => !item.includes(".")
	);

	const filesToBeTranspiled = onlyCollectionFolders.reduce((acc, folder) => {
		const folderFilesPath = `${iconsFilesFolderPath}/${folder}`;
		const folderFiles = fs.readdirSync(folderFilesPath) || [];
		const iconsFiles = folderFiles.filter(
			(file) =>
				file.endsWith(".tsx") &&
				!file.endsWith(".stories.tsx") &&
				!file.endsWith("index.tsx")
		);

		const fullPathFiles = iconsFiles.map(
			(fileName) => `${folderFilesPath}/${fileName}`
		);

		return [...acc, ...fullPathFiles];
	}, []);

	const webpackEntryPoints = filesToBeTranspiled.reduce((acc, nextPath) => {
		const filename = path.parse(nextPath).name;

		return {
			...acc,
			[filename]: nextPath,
		};
	}, {});

	const newWebpackConfig = {
		...webpackConfig,
		entry: { ...webpackEntryPoints },
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
