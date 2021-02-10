const { parallel } = require("gulp");

const pugIconsTask = require("./pug-icons");
const reactIconsTask = require("./react-icons");

module.exports = parallel(pugIconsTask, reactIconsTask);
