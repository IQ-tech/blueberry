const fs = require("fs");
const iconsConfig = require("../../../../icons.config");
const collectionStoriesTemplate = require("./templates/collection-stories-template");

module.exports = function generateIconsStoriesTask(cb) {
	const iconCollections = iconsConfig.iconCollections;

	iconCollections.forEach((collection) => {
		const collectionName = collection.name;
		const collectionIconsFolder = `./src/flavors/react/components/icons/generated/${collectionName}`;
		const collectionStories = collectionStoriesTemplate(collectionName);
		const storiesFilePath = `${collectionIconsFolder}/${collectionName}.stories.tsx`;

		fs.writeFileSync(storiesFilePath, collectionStories);
	});

	cb();
};
