const rimraf = require("rimraf");

module.exports = function clearPugOutPutFolderTask(cb) {
	const distFolderWildcard = `src/flavors/pug/components/icons/*.pug`;

	rimraf(distFolderWildcard, () => {
		cb();
	});
};
