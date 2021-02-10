const buildLibTask = require("./tasks/build-lib");
const updateIconsTask = require("./tasks/process-files/icons");

exports["register-icons"] = updateIconsTask;
exports["build-lib"] = buildLibTask;
