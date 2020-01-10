module.exports = {
  setupFiles: ["<rootDir>/.jest/register-context.js"],
  transform: {
    "^.+\\.jsx?$": [
      "babel-jest",
      {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }
    ]
  }
};
