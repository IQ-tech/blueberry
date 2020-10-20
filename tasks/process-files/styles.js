// compile main stylesheet:
// iq-design-system/main.css
// iq-design-system/components.css

const webpack = require("webpack");
const webpackProdConfig = require("../../config/webpack.prod");


/**
 * this task bundles all the styl files into a single
 * iq-design-system.css
 */


module.exports =  () => {
  const entryFile = "./src/core/index.js";
  const webpackConfig = webpackProdConfig({
    entry: entryFile,
  });

  const compiler = webpack(webpackConfig);

  return new Promise((res, rej) => {
    compiler.run(() => {
      res();
    });
  });
};
