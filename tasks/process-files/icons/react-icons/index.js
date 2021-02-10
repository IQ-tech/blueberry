const { series, parallel } = require("gulp");
const { cleanFolderTaskFactory } = require("../../../task-factories");

const generateReactIconsTask = require("./generate-react-icons");

const clearReactOutputFolderTask = cleanFolderTaskFactory(
	"src/flavors/react/components/icons/*.tsx"
);

const genIconRootModuleFactory = require("./generate-icon-root-module");

const genRootModuleTask = genIconRootModuleFactory(
	"./src/flavors/react/components/icons",
	".tsx"
);

module.exports = series(
	clearReactOutputFolderTask,
	generateReactIconsTask,
	genRootModuleTask
);
