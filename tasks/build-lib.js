const { series, parallel } = require("gulp");

const cleanDistTask = require("./clean-dist");
const {
	moveCoreFilesToDistTask,
	movePugFilesToDistTask,
} = require("./move-files");

const compileStylesFileTask = require("./process-files/compile-styles");
const bundleReactLibTask = require("./react/bundle-react-lib");

// do all tasks imported above in the correct order
const buildLibTask = series(
	cleanDistTask,
	parallel(moveCoreFilesToDistTask, movePugFilesToDistTask),
	compileStylesFileTask,
	/* bundleReactLibTask */
);

module.exports = buildLibTask;
