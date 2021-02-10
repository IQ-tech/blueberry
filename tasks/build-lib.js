const { series } = require("gulp");

const moveCoreFilesToDistTask = require("./process-files/move-files-to-dist");
const bundleLibTask = require("./process-files/bundle-lib");

const { cleanFolderTaskFactory } = require("./task-factories");

const cleanDistTask = cleanFolderTaskFactory("dist/*");

// Do all tasks imported above in the correct order
const buildLibTask = series(
	cleanDistTask,
	bundleLibTask,
	moveCoreFilesToDistTask
);

module.exports = buildLibTask;
