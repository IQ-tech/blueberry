const breakpointData = {
	data: [
		{
			name: `aboveXSmall() 🤳`,
			screen: ` 0px a 599px`,
			point: `xsmall(0px)`,
			code: `+aboveXSmall() {

      }`,
			slug: `xsmall`,
		},
		{
			name: `aboveSmall() 📱`,
			screen: ` 600px a 719px`,
			point: `small(600px)`,
			code: `+aboveSmall() {

      }`,
			slug: `small`,
		},
		{
			name: `aboveMedium() 💻`,
			screen: ` 720px a 1023px`,
			point: `medium(720px)`,
			code: `+aboveMedium() {

      }`,
			slug: `medium`,
		},
		{
			name: `aboveLarge() 🖥️`,
			screen: ` 1024px a 1919px`,
			point: `large(1024px)`,
			code: `+aboveLarge() {

      }`,
			slug: `large`,
		},
		{
			name: `aboveXLarge() 🖥️🖥️`,
			screen: ` 1920px - o céu é o limite`,
			point: `xlarge(1920px)`,
			code: `+aboveXLarge() {

      }`,
			slug: `xlarge`,
		},
		// {
		// 	name: `betweenAB(bpA, bpB)`,
		// 	screen: `finidos por você. `,
		// 	point: `xlarge(1920px)`,
		// 	code: `+aboveXLarge() {

		//   }`,
		// 	slug: `xlarge`,
		// },
	],
};

export default breakpointData;
