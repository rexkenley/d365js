const merge = require("webpack-merge"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  common = require("./config.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: [new CleanWebpackPlugin()]
});
