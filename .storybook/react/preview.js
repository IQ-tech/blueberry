import "!style-loader!css-loader!stylus-loader!../common/styles.styl";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: "light",
		values: [
			{
				name: "light",
				value: "#F9F9F9",
			},
			{
				name: "dark",
				value: "#1C1277",
			},
			{
				name: "opaque",
				value: "#EFEFEF",
			},
		],
	},
};
