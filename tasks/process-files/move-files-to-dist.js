const { parallel } = require("gulp");
const { moveFromToTaskFactory } = require("../task-factories")


const moveStylusUtilsFilesTask = moveFromToTaskFactory(
	"src/core/stylus-utils/**/*.styl",
	"dist/style-utils"
);

const moveTokensFilesTask = moveFromToTaskFactory(
	"src/core/tokens/**/*.json",
	"dist/tokens"
);

const moveStyleVariablesTask = moveFromToTaskFactory(
	"src/core/variables.styl",
	"dist/"
);

const movePugFilesTask = moveFromToTaskFactory(
	"src/flavors/pug/**/*.pug",
	"dist/pug/"
);

module.exports = parallel(
	moveStylusUtilsFilesTask,
	moveTokensFilesTask,
	moveStyleVariablesTask,
	movePugFilesTask
);
