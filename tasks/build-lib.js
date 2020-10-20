const { series, src, dest } = require("gulp");

const cleanDistTask = require("./clean-dist");
const  compileMainStylesFileTask  = require("./process-files/styles");

// make all styl files and json tokens available to be consumed on dist
function moveCoreFilesToDistTask() {
  const extensionsToAvoid = ["md", "js"].map(
    (extension) => `!src/core/**/*.${extension}`
  );

  return src(["src/core/**/*", ...extensionsToAvoid]).pipe(dest("dist/"));
}

module.exports = series(
  cleanDistTask,
  moveCoreFilesToDistTask,
  compileMainStylesFileTask
);
