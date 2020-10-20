const rimraf = require("rimraf");

/** Clear the lib dist folder */
function cleanDistTask() {
  const distFolderWildcard = `dist/*`;

  return new Promise((resolve) => {
    rimraf(distFolderWildcard, () => {
      resolve();
    });
  });
}

module.exports = cleanDistTask;
