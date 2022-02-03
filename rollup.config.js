import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";

const packageConfig = require("./package.json");
const outputMain = packageConfig.main;
const typesFiles = packageConfig.types
const input = "src/main.ts";

export default [
	{
		input,
		output: [
			{
				file: outputMain,
				format: "cjs",
				sourcemap: true,
				esModule: true,
				freeze: false
			},
			{
				dir: "es",
				format: "es",
				preserveModules: true,
				sourcemap: true,
				esModule: true,
				freeze: false
			},
		],
		plugins: [
			esbuild({
				jsx: "transform", // default, or 'preserve'
				jsxFactory: "React.createElement",
				jsxFragment: "React.Fragment",
			}),
			json(),
		],
	},
	{
		input,
		output: [
			{
				file: typesFiles,
				format: "es"
			}
		],
		plugins: [dts(), json()]
	}
];
