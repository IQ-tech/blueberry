const fs = require("fs");
const path = require("path");
const { src, dest, series } = require("gulp");
const html2pug = require("gulp-html2pug");
const through = require("through2");
const { pascalCase } = require("change-case");

function transformPugFragmentToMixinPlugin() {
	return through.obj(function (file, enc, cb) {
		const filename = file.relative;
		const fileNameWithoutExtension = path.parse(filename).name;
		const mixinName = pascalCase(fileNameWithoutExtension)
		const fileContent = file.contents.toString();
		const fragmentLines = fileContent.split("\n");
		const linesWithNewTab = fragmentLines.map((line) => `\t${line}`).join("\n");
		const newFileContent = `mixin ${mixinName}()\n${linesWithNewTab}`;

		file.contents = Buffer.from(newFileContent);
		this.push(file);
		cb(null, file);
	});
}

function renamePugIconPlugin() {
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
}

function generatePugIconsTask() {
	return src("./src/icons/*.svg")
		.pipe(html2pug({ tabs: true, fragment: true }))
		.pipe(renamePugIconPlugin())
		.pipe(transformPugFragmentToMixinPlugin())
		.pipe(dest("./src/flavors/pug/components/icons"));
}

module.exports = function updateIconsTask() {
	return generatePugIconsTask();

	// clear pug icons folder
	// clear pug icons file

	// generate pug file

	//  modify demo file
};
