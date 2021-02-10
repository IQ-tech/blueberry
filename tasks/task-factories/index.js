const { src, dest } = require("gulp");
const rimraf = require("rimraf");

/**
 * This factory creates a gulp task that move files from a folder to another
 * @param {string} from - base folder
 * @param {string} to - output folder
 */
exports.moveFromToTaskFactory = function moveFromToTaskFactory(from, to) {
	const moveFiles = () => src(from).pipe(dest(to));
	return moveFiles;
};

/**
 * This factory generates a task that clean a specific folder
 * @param {string} folderToCleanWildCard - folder to be cleanned
 */
exports.cleanFolderTaskFactory = function (folderToCleanWildCard) {
	const cleanningFolder = (cb) => {
		rimraf(folderToCleanWildCard, () => {
			cb();
		});
	};

	return cleanningFolder;
};
