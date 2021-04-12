function tabs({ main, elm }) {
	main((_) => [log]);

	const log = () => {
		console.log("Hello World!!!", elm);
	};
}

export default tabs
