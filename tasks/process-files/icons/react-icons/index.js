const { series, parallel } = require("gulp");
const { cleanFolderTaskFactory } = require("../../../task-factories");

const clearReactOutputFolderTask = cleanFolderTaskFactory(
	"src/flavors/react/components/icons/*.tsx"
);

const generateReactIconsTask = require("./generate-react-icons");

const genIconRootModuleTask = require("./generate-icon-root-module");

module.exports = series(
	clearReactOutputFolderTask,
	generateReactIconsTask,
	genIconRootModuleTask
);
