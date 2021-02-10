const { series } = require("gulp");

const generatePugIconsTask = require("./generate-pug-icons");
const generatePugDemoTask = require("./generate-pug-demo");
const clearPugOutputFolderTask = require("./clear-pug-output-folder");

module.exports = series(
	clearPugOutputFolderTask,
	generatePugIconsTask,
	generatePugDemoTask
);
