const webpack = require("webpack"),
  merge = require("webpack-merge"),
  prd = require("./config.prd.js");

module.exports = merge(prd, {
  plugins: [new webpack.HashedModuleIdsPlugin()],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        default: false,
        vendors: false,
        common: {
          name: "common",
          minChunks: 2,
          chunks: "async",
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: 20,
          name: "vendor"
        }
      }
    }
  }
});
