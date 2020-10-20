const rimraf = require("rimraf");
const designSytemConfig = require("../design-system.config");

/** Clear the lib dist folder */
function cleanDistTask() {
  const libDistFolder = designSytemConfig.lib.distFolder;
  const distFolderWildcard = `${libDistFolder}/*`;

  return new Promise((resolve) => {
    rimraf(distFolderWildcard, () => {
      resolve();
    });
  });
}

module.exports = cleanDistTask;
