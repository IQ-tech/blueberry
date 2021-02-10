const { series, parallel } = require("gulp");

const generatePugIconsTask = require("./generate-pug-icons");
const generatePugDemoTask = require("./generate-pug-demo");

const generateReactIconsTask = require("./react-icons/generate-react-icons");

const { cleanFolderTaskFactory } = require("../../task-factories");

const clearPugOutputFolderTask = cleanFolderTaskFactory(
	"src/flavors/pug/components/icons/*.pug"
);

const clearReactOutputFolderTask = cleanFolderTaskFactory(
	"src/flavors/react/components/icons/*.tsx"
);

module.exports = parallel(
	series(clearPugOutputFolderTask, generatePugIconsTask, generatePugDemoTask),
	series(clearReactOutputFolderTask, generateReactIconsTask)
);
