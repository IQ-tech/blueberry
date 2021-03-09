const { series } = require("gulp");
const { cleanFolderTaskFactory } = require("../../../task-factories");

const clearReactOutputFolderTask = cleanFolderTaskFactory(
	"src/flavors/react/components/icons/generated/"
);
const generateReactIconsTask = require("./generate-react-icons");
const genIconRootModulesTask = require("./generate-icon-root-modules");
const genIconsStoriesTask = require("./generate-icons-stories");

module.exports = series(
	clearReactOutputFolderTask,
	generateReactIconsTask,
	genIconRootModulesTask,
	genIconsStoriesTask
);
