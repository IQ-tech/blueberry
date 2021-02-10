const rimraf = require("rimraf");

/** Clear the lib dist folder */
function cleanDistTask(cb) {
	const distFolderWildcard = `dist/*`;

	rimraf(distFolderWildcard, () => {
		cb();
	});
}

module.exports = cleanDistTask;
