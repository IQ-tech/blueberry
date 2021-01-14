const { src, dest, parallel } = require("gulp");

// make all styl files and json tokens available to be consumed on dist
function moveCoreFilesToDistTask() {
	const extensionsToAvoid = ["md", "js"].map(
		(extension) => `!src/core/**/*.${extension}`
	);

	return src(["src/core/**/*", ...extensionsToAvoid]).pipe(dest("dist/"));
}

// move pug files to dist
function movePugFilesToDistTask() {
	return src("src/flavors/pug/**/*.pug").pipe(dest("dist/pug/"));
}

// move font files
function moveFontsToDistTask() {
	return src("src/fonts/**/*.woff2").pipe(dest("dist/fonts/"));
}

const moveFilesToDistTask = parallel(
	moveCoreFilesToDistTask,
	movePugFilesToDistTask,
	/* moveFontsToDistTask */
);

module.exports = moveFilesToDistTask;
