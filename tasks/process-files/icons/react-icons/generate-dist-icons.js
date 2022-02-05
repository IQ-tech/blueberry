const { series } = require("gulp");
const { rollup } = require("rollup");
const json = require("@rollup/plugin-json");
const esbuild = require("rollup-plugin-esbuild").default;
const fs = require("fs");
const packageConfig = require("../../../../package.json")


const iconsFilesFolderPath = "./src/flavors/react/components/icons/generated";

async function bundleIndividualIconsTask(cb) {
	const generatedIconCollections = fs.readdirSync(iconsFilesFolderPath) || [];
	const onlyCollectionFolders = generatedIconCollections.filter(
		(item) => !item.includes(".")
	);

	const filesToBeTranspiled = onlyCollectionFolders.reduce((acc, folder) => {
		const folderFilesPath = `${iconsFilesFolderPath}/${folder}`;
		const folderFiles = fs.readdirSync(folderFilesPath) || [];
		const iconsFiles = folderFiles.filter(
			(file) =>
				file.endsWith(".tsx") &&
				!file.endsWith(".stories.tsx") &&
				!file.endsWith("index.tsx")
		);

		const fullPathFiles = iconsFiles.map(
			(fileName) => `${folderFilesPath}/${fileName}`
		);

		return [...acc, ...fullPathFiles];
	}, []);

	const bundle = await rollup({
		input: filesToBeTranspiled,
		external: [...Object.keys(packageConfig.peerDependencies)],
		plugins: [
			esbuild({
				jsx: "transform", // default, or 'preserve'
				jsxFactory: "React.createElement",
				jsxFragment: "React.Fragment",
			}),
			json(),
		],
	});

	await bundle.write({
		dir: "dist/reactIcons",
		format: "es",
	});

	await bundle.close();

	cb();
}

function generateRootModuleTask(cb) {
	const outputDir = "dist/reactIcons";
	const iconsFiles = fs.readdirSync(outputDir) || [];
	const iconNames = iconsFiles.map((fileName) => fileName.split(".")[0]);
	const moduleFileContent = iconNames
		.map((iconName) => `export {default as ${iconName}} from "./${iconName}"`)
		.join("\n");

	fs.writeFileSync(`${outputDir}/index.js`, moduleFileContent);
	cb();
}

module.exports = series(bundleIndividualIconsTask, generateRootModuleTask);
