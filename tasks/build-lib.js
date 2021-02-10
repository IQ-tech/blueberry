const { series } = require("gulp");

const cleanDistTask = require("./clean-dist");
const moveCoreFilesToDistTask = require("./process-files/move-files-to-dist");

const bundleLibTask = require("./process-files/bundle-lib");

// do all tasks imported above in the correct order
const buildLibTask = series(
	cleanDistTask,
	bundleLibTask,
	moveCoreFilesToDistTask
);

module.exports = buildLibTask;
