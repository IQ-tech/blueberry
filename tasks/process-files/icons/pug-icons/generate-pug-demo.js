const fs = require("fs");
const path = require("path");


/**
 * After creating all pug icons, this task should add them to
 * a demo file to be displayed on the storybook
 * 
 * it rewrites the file in src/flavors/pug/components/icons/demo/index.pug
 * when running yarn register-icons
 */
module.exports = function generatePugIconsDemo(cb) {
	const demosPugTemplate = `\ninclude ../../FlexGrid/index.pug\ninclude ../../FlexGrid/Row.pug\ninclude ./IconBox.pug\nmixin IconsDemo()\n\t.icons-demo\n\t\t+FlexGrid({})\n\t\t\t+FlexGridRow()`;
	const demosPugTemplateLines = demosPugTemplate.split("\n");

	const iconDemoTemplate = (filename, mixinName) =>
		`\t\t\t\t+IconBox({filename: "${filename}"})\n\t\t\t\t\t+${mixinName}()\n`;

	const importPugTemplate = (filename) => `include ../${filename}`;

	const disclaimer = '//Generated file, do not modify manually\n'

	const IconsFolderFiles =
		fs.readdirSync("./src/flavors/pug/components/icons") || [];

	const pugIcons = IconsFolderFiles.filter((filename) =>
		/\.pug$/.test(filename)
	);

	const newTemplateLines = pugIcons.reduce((acc, nextIconPath) => {
		const mixinName = path.parse(nextIconPath).name;
		const newIncludeLine = importPugTemplate(nextIconPath)
		const iconTemplate = iconDemoTemplate(nextIconPath, mixinName)

		return [
			newIncludeLine,
			...acc,
			iconTemplate
		]

	}, demosPugTemplateLines)

	const withCommentLine = [disclaimer, ...newTemplateLines]

	const newFileContent = withCommentLine.join("\n")

	fs.writeFileSync('./src/flavors/pug/components/icons/demo/index.pug', newFileContent)

	cb();
}