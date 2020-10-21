const { series } = require("gulp");

const cleanDistTask = require("./clean-dist");
const moveCoreFilesToDistTask = require("./move-core-files")
const  compileStylesFileTask  = require("./process-files/styles");



module.exports = series(
  cleanDistTask,
  moveCoreFilesToDistTask,
  compileStylesFileTask
);
