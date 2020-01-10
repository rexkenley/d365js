const merge = require("webpack-merge"),
  dev = require("./config.dev.js");

module.exports = merge(dev, {
  output: {
    libraryTarget: "this"
  }
});
