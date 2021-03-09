const { src, dest, series } = require("gulp");
const svgo = require("gulp-svgo");
const through = require("through2");
const path = require("path");
const { pascalCase } = require("change-case");
const ReactIconTemplate = require("./templates/component-template");
const iconsConfig = require("../../../../icons.config");

/**
 * This plugin parse the svg file into a react component
 */
function svgToTSXPlugin(collectionName) {
	return through.obj(function (file, enc, cb) {
		const getNewFilePath = (componentName) => {
			const newExtension = ".tsx";
			const newBase = `${componentName}${newExtension}`;

			return path.format({
				...parsedPath,
				name: componentName,
				ext: newExtension,
				base: newBase,
			});
		};

		const filePath = file.path;
		const parsedPath = path.parse(filePath);
		const { name } = parsedPath;
		const componentName = `${pascalCase(collectionName)}${pascalCase(name)}`;

		const svgFileContent = file.contents.toString();
		const componentContent = ReactIconTemplate(componentName, svgFileContent);

		file.path = getNewFilePath(componentName);
		file.contents = Buffer.from(componentContent);
		cb(null, file);
	});
}

function iconCollectionTask(collection = {}) {
	const folderSrc = collection.folder;
	const collectionName = collection.name;
	const iconsGlob = folderSrc.endsWith("/")
		? `${folderSrc}*.svg`
		: `${folderSrc}/*.svg`;

	const destFolder = `src/flavors/react/components/icons/generated/${collectionName}`;

	return new Promise((res) => {
		src(iconsGlob)
			.pipe(
				svgo({
					plugins: [
						{
							removeDimensions: true, // replace inline svg width and height by the viewbox to keep responsivity
						},
					],
				})
			)
			.pipe(svgToTSXPlugin(collectionName))
			.pipe(dest(destFolder))
			.on("finish", () => {
				res();
			});
	});
}

module.exports = function generateReactIconsTask() {
	const iconsCollections = iconsConfig.iconCollections;
	const genCollectionsTasks = iconsCollections.map((collection) =>
		iconCollectionTask(collection)
	);

	return Promise.all(genCollectionsTasks);
};
