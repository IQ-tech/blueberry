const { src, dest } = require("gulp");
const svgo = require("gulp-svgo");
const through = require("through2");
const path = require("path");
const { pascalCase } = require("change-case");

const ReactIconTemplate = ( componentName, iconSvg ) => `
	import React from "react";

	export default function ${componentName}({width = '100%', height = '100%', style = {}}){
		const componentStyles = {
			...style,
			...(!!width ? {width} : {}),
			...(!!height ? {height} : {})
		};

		return (
			<div 
				className="iq-icon iq-icon--${componentName}" 
				style={componentStyles} 
				dangerouslySetInnerHTML={{__html:'${iconSvg}'}} 
			/>
		)
	}
`;

function svgToTSXPlugin() {
	return through.obj(function (file, enc, cb) {
		const getNewFilePath = (componentName) => {
			const newExtension = ".tsx";
			const newBase = `${componentName}${newExtension}`;

			return path.format({
				...parsedPath,
				name: componentName,
				ext: newExtension,
				base: newBase,
			});
		};

		const filePath = file.path;
		const parsedPath = path.parse(filePath);
		const { name } = parsedPath;
		const componentName = pascalCase(name);

		const svgFileContent = file.contents.toString();
		const componentContent = ReactIconTemplate(componentName, svgFileContent)


		file.path = getNewFilePath(componentName);
		file.contents = Buffer.from(componentContent);
		cb(null, file);
	});
}

module.exports = function generateReactIconsTask() {
	src("./src/icons/*.svg")
		.pipe(
			svgo({
				plugins: [
					{
						removeDimensions: true, // replace inline svg width and height by the viewbox to keep responsivity
					},
				],
			})
		)
		.pipe(svgToTSXPlugin())
		.pipe(dest("./src/flavors/react/components/icons"));
};
