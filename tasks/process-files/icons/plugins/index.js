const through = require("through2");
const { pascalCase } = require("change-case");
const path = require("path");

/**
 * After convert the svg icon to pug syntax, we neeed to
 * insert this new pug fragment inside a pug mixin,
 * and that's exactly what this file stream plugin does
 */
exports.transformPugFragmentToMixinPlugin = function () {
	return through.obj(function (file, enc, cb) {
		const filename = file.relative;
		const fileNameWithoutExtension = path.parse(filename).name;
		const mixinName = pascalCase(fileNameWithoutExtension);
		const fileContent = file.contents.toString();
		const fragmentLines = fileContent.split("\n");
		const linesWithNewTab = fragmentLines.map((line) => `\t${line}`).join("\n");
		const newFileContent = `mixin ${mixinName}()\n${linesWithNewTab}`;

		file.contents = Buffer.from(newFileContent);
		this.push(file);
		cb(null, file);
	});
};


/**
 * This file stream plugin should modify the name
 * of the outputted file to always use pascal case
 * ex.: my-icon.svg -> MyIcon.pug
 * ex.: my-icon.svg -> MyIcon.tsx
 */
exports.filenameCamelCasePlugin = function () {
	return through.obj(function (file, enc, cb) {
		const filename = file.relative;
		const filePath = file.path;
		const fileNameWithoutExtension = path.parse(filename).name;
		const newFilename = pascalCase(fileNameWithoutExtension);
		const fileExtension = path.parse(filename).ext;

		const newFilePath = filePath.replace(
			filename,
			`${newFilename}${fileExtension}`
		);
		file.path = newFilePath;
		cb(null, file);
	});
};
