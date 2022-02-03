import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import packageConfig from "./package.json";
import {resolve} from "path"


const projectRootDir = resolve(__dirname);

const outputMain = packageConfig.main;
const typesFiles = packageConfig.types;
const input = "src/main.ts";

const createAlias = (alias, path) => ({
	find: alias,
	replacement: resolve(projectRootDir, path)
})

const aliasConfig = alias({
	entries: [
		createAlias("src", "src"),
		createAlias("core", "src/core"),
		createAlias("fonts", "src/fonts"),
		createAlias("icons", "src/icons"),
		createAlias("flavors", "src/flavors"),
	],
});

export default [
	{
		input,
		output: [
			{
				file: outputMain,
				format: "cjs",
				sourcemap: true,
				esModule: true,
				freeze: false,
			},
			{
				dir: "es",
				format: "es",
				preserveModules: true,
				sourcemap: true,
				esModule: true,
				freeze: false,
			},
		],
		plugins: [
			esbuild({
				jsx: "transform", // default, or 'preserve'
				jsxFactory: "React.createElement",
				jsxFragment: "React.Fragment",
			}),
			json(),
			aliasConfig,
		],
	},
	{
		input,
		output: [
			{
				file: typesFiles,
				format: "es",
			},
		],
		plugins: [dts(), json(), aliasConfig],
		external: [...Object.keys(packageConfig.peerDependencies)],
	},
];
