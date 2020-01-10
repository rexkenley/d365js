const webpack = require("webpack"),
  { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { chrome: "70", firefox: "63", edge: "17", ie: "11" }
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              ["@babel/plugin-transform-runtime", { corejs: 3 }] // non global polyfills
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: "static" })
  ]
};
