const merge = require("webpack-merge"),
  prd = require("./config.prd.js");

module.exports = merge(prd, {
  output: {
    libraryTarget: "this"
  }
});
