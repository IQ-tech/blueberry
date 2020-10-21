const { series, parallel } = require("gulp");

const cleanDistTask = require("./clean-dist");
const {
	moveCoreFilesToDistTask,
	movePugFilesToDistTask,
} = require("./move-files");
const compileStylesFileTask = require("./process-files/styles");

module.exports = series(
	cleanDistTask,
	parallel(moveCoreFilesToDistTask, movePugFilesToDistTask),
	compileStylesFileTask
);
