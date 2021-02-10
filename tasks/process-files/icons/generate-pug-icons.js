const svgo = require("gulp-svgo");
const html2pug = require("gulp-html2pug");
const { src, dest } = require("gulp");

const {
	transformPugFragmentToMixinPlugin,
	filenameCamelCasePlugin,
} = require("./plugins");

/** This task function should create a pug mixin file based on
 * every svg icon on src/icons folder
 */
module.exports = function generatePugIconsTask() {
	return src("./src/icons/*.svg")
		.pipe(
			svgo({
				plugins: [
					{
						removeDimensions: true, // replace inline svg width and height by the viewbox to keep responsivity
					},
				],
			})
		)
		.pipe(html2pug({ tabs: true, fragment: true }))
		.pipe(filenameCamelCasePlugin())
		.pipe(transformPugFragmentToMixinPlugin())
		.pipe(dest("./src/flavors/pug/components/icons"));
};
