const buildLibTask = require("./tasks/create-dist");
const updateIconsTask = require("./tasks/register-icons");

exports["register-icons"] = updateIconsTask;
exports["create-dist"] = buildLibTask;
