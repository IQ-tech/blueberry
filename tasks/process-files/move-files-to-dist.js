const { src, dest, parallel } = require("gulp");

function moveFromToTaskFactory(from, to) {
	const moveFiles = () => src(from).pipe(dest(to));
	return moveFiles;
}

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
