module.exports = {
  addons: ["@storybook/addon-docs/preset"],
  stories: [
    "../../src/stories/**/*.stories.mdx",
    "../../src/flavors/pug/**/*.stories.mdx",
    "../../src/flavors/pug/**/*.stories.js",
  ],
};
