const { series } = require("gulp");

const generatePugIconsTask = require("./generate-pug-icons");
const generatePugDemoTask = require("./generate-pug-demo");

module.exports = series(generatePugIconsTask, generatePugDemoTask);
