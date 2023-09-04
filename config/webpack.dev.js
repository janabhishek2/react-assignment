const commonConfig = require("./webpack.common");
const path = require("path");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:9000/",
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);
