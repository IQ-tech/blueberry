const fs = require("fs");
const path = require("path");
const iconsConfig = require("../../../../icons.config");

const iconModuleTemplate = (componentName) =>
	`export {default as ${componentName}} from "./${componentName}"`;

function generateCollectionRootModule(collection) {
	const collectionName = collection.name;
	const collectionIconsFolder = `./src/flavors/react/components/icons/generated/${collectionName}`;
	const extensionToScan = ".tsx";
	const storiesFileExt = ".stories.tsx";
	const rootModuleExt = "index.tsx";

	const folderFiles = fs.readdirSync(collectionIconsFolder) || [];
	const onlyIconFiles = folderFiles.filter(
		(iconFile) =>
			iconFile.endsWith(extensionToScan) &&
			!iconFile.endsWith(storiesFileExt) &&
			!iconFile.endsWith(rootModuleExt)
	);

	const fileNames = onlyIconFiles.map((filename) => path.parse(filename).name);
	const modulesFileLines = fileNames.map((filename) =>
		iconModuleTemplate(filename)
	);

	const collectionModulesFileContent = [
		"// This is a generated file, do not modify manually",
		...modulesFileLines,
	].join("\n");

	const newFilePath = `${collectionIconsFolder}/index${extensionToScan}`;

	fs.writeFileSync(newFilePath, collectionModulesFileContent);
}

module.exports = function generateRootModulesTask(cb) {
	// generates root module for each icon collection
	const collections = iconsConfig.iconCollections;
	collections.forEach((collection) => generateCollectionRootModule(collection));

	cb();
};
