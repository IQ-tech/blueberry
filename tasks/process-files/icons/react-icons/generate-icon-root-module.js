const fs = require("fs");
const path = require("path");

const moduleTemplate = (componentName) =>
	`export {default as ${componentName}} from "./${componentName}"`;

module.exports = function GenIconRootModuleTaskFactory(
	folderToScan,
	extensionToScan = ".js"
) {
	const generatingIconsRootComponent = (cb) => {
		const folderFiles = fs.readdirSync(folderToScan) || [];
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

		const folderHasSlash = !!folderToScan.endsWith("/");
		const newFilePath = folderHasSlash
			? `${folderToScan}index${extensionToScan}`
			: `${folderToScan}/index${extensionToScan}`;

		fs.writeFileSync(newFilePath, modulesFileContent);

		cb();
	};
	return generatingIconsRootComponent;
};
