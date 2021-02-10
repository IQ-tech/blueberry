const { series } = require("gulp");

const moveCoreFilesToDistTask = require("./process-files/move-files-to-dist");
const bundleLibTask = require("./process-files/bundle-lib");

const { cleanFolderTaskFactory } = require("./task-factories");

const cleanDistTask = cleanFolderTaskFactory("dist/*");

const generateDistReactIcons = require("./process-files/icons/react-icons/generate-dist-icons");

// Do all tasks imported above in the correct order
const buildLibTask = series(
	cleanDistTask,
	bundleLibTask,
	moveCoreFilesToDistTask,
	generateDistReactIcons
);

module.exports = buildLibTask;
