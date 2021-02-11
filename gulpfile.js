const buildLibTask = require("./tasks/build-lib");
const updateIconsTask = require("./tasks/register-icons");

exports["register-icons"] = updateIconsTask;
exports["build-lib"] = buildLibTask;
