const { series } = require("gulp");

const generatePugIconsTask = require("./generate-pug-icons");
const generatePugDemoTask = require("./generate-pug-demo");

const { cleanFolderTaskFactory } = require("../../task-factories");

const clearPugOutputFolderTask = cleanFolderTaskFactory(
	`src/flavors/pug/components/icons/*.pug`
);

module.exports = series(
	clearPugOutputFolderTask,
	generatePugIconsTask,
	generatePugDemoTask
);
