const { src, dest } = require("gulp");

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

module.exports = { moveCoreFilesToDistTask, movePugFilesToDistTask };
