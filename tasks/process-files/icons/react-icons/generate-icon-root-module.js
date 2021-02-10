const fs = require("fs");
const path = require("path");

const moduleTemplate = (componentName) =>
	`export {default as ${componentName}} from "./generated/${componentName}"`;

module.exports = function genIconRootModuleTask(cb) {
	const reactIconsFolder = "./src/flavors/react/components/icons/";
	const reactGeneratedIconsFolder = `${reactIconsFolder}generated/`;
	const extensionToScan = ".tsx";

	const folderFiles = fs.readdirSync(reactGeneratedIconsFolder) || [];
	const extFiles = folderFiles.filter((iconFile) =>
		iconFile.endsWith(extensionToScan)
	);

	const fileNames = extFiles.map((filename) => path.parse(filename).name);
	const modulesFileLines = fileNames.map((filename) =>
		moduleTemplate(filename)
	);

	const modulesFileContent = [
		"// This is a generated file, do not modify manually",
		...modulesFileLines,
	].join("\n");

	const newFilePath = `${reactIconsFolder}index${extensionToScan}`;

	fs.writeFileSync(newFilePath, modulesFileContent);

	cb();
};
