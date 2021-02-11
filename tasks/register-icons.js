const { parallel } = require("gulp");

const pugIconsTask = require("./process-files/icons/pug-icons");
const reactIconsTask = require("./process-files/icons/react-icons");

module.exports = parallel(pugIconsTask, reactIconsTask);