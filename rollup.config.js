import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";
import autoprefixer from "autoprefixer";
import packageConfig from "./package.json";
import { resolve, join } from "path";
import { readFileSync } from "fs";
import { outputFile } from "fs-extra";

const projectRootDir = resolve(__dirname);
const typesFiles = packageConfig.types;
const input = "src/main.ts";

/**
 * With this rollup config we get three outputs to this package, an es bundle that
 * bring tree shaking to the lib, a cjs bundle and the library type definitions
 */

const createAlias = (alias, path) => ({
	find: alias,
	replacement: resolve(projectRootDir, path),
});

const commonPlugins = [
	alias({
		entries: [
			createAlias("src", "src"),
			createAlias("core", "src/core"),
			createAlias("fonts", "src/fonts"),
			createAlias("icons", "src/icons"),
			createAlias("flavors", "src/flavors"),
		],
	}),
];

const esbuildPluginConfig = esbuild({
	jsx: "transform", // default, or 'preserve'
	jsxFactory: "React.createElement",
	jsxFragment: "React.Fragment",
});

const commonOutputConfig = {
	sourcemap: true,
	esModule: true,
	freeze: false,
};

const external = [...Object.keys(packageConfig.peerDependencies)];

const cjsBundle = {
	input,
	output: [
		{
			file: packageConfig.main,
			format: "cjs",
			...commonOutputConfig,
		},
	],
	plugins: [
		postcss({
			extract: "styles.css",
			plugins: [
				autoprefixer(),
				postcssUrl({
					url: (asset) => {
						const oldPath = asset.relativePath;
						const newPath = oldPath.replace("../", "").replace("./", "");
						const oldFile = readFileSync(asset.absolutePath);
						outputFile(join("dist", newPath), oldFile);
						return `./${newPath}`;
					},
				}),
			],
		}),
		json(),
		esbuildPluginConfig,
		...commonPlugins,
	],
	external,
};

const esBundle = {
	input,
	output: [
		{
			dir: "es",
			format: "es",
			preserveModules: true,
			...commonOutputConfig,
		},
	],
	plugins: [postcss({ inject: false }), json(), esbuildPluginConfig, ...commonPlugins],
	external,
};

const typedefsBundle = {
	input,
	output: [
		{
			dir: "types",
			format: "es",
			preserveModules: true,
		},
	],
	plugins: [dts(), postcss({ inject: false }), json(), ...commonPlugins],
	external,
};

export default [cjsBundle, esBundle, typedefsBundle];
