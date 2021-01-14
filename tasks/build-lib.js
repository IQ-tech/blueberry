const { series } = require("gulp");

const cleanDistTask = require("./clean-dist");
const moveFilesToDistTask = require("./process-files/move-files-to-dist");

const compileStylesFileTask = require("./process-files/bundle-lib");

// do all tasks imported above in the correct order
const buildLibTask = series(
	cleanDistTask,
	moveFilesToDistTask,
	compileStylesFileTask
);

module.exports = buildLibTask;
