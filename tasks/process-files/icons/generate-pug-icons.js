const svgo = require("gulp-svgo");
const html2pug = require("gulp-html2pug");
const { src, dest } = require("gulp");

const {
	transformPugFragmentToMixinPlugin,
	renamePugIconPlugin,
} = require("./plugins");

/** This task function should create a pug mixin file based on
 * every svg icon on src/icons folder
 */
module.exports = function generatePugIconsTask() {
	return src("./src/icons/*.svg")
		.pipe(svgo())
		.pipe(html2pug({ tabs: true, fragment: true }))
		.pipe(renamePugIconPlugin())
		.pipe(transformPugFragmentToMixinPlugin())
		.pipe(dest("./src/flavors/pug/components/icons"));
};
