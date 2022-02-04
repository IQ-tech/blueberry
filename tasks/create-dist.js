const { series } = require("gulp");
const moveCoreFilesToDistTask = require("./process-files/move-files-to-dist");
const { cleanFolderTaskFactory } = require("./task-factories");
const cleanGeneratedFoldersTask = cleanFolderTaskFactory("{types,dist,es}");
const generateDistReactIcons = require("./process-files/icons/react-icons/generate-dist-icons");

const createDistTask = series(
	cleanGeneratedFoldersTask,
	moveCoreFilesToDistTask,
	/* generateDistReactIcons */
);

module.exports = createDistTask;
