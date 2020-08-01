const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "jest-circus.js",
    path: path.resolve(__dirname, "dist"),
    library: "jestCircus",
    libraryTarget: "umd",
  },
  node: {
    fs: "empty",
    module: "empty",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /isInteractive/,
        loader: "string-replace-loader",
        options: {
          search: `!!process.stdout.isTTY`,
          replace: `false`,
        },
      },
      {
        test: /eventHandler/,
        loader: "string-replace-loader",
        options: {
          search: `case 'run_finish': {`,
          replace: `case 'run_finish': {
            state.hasStarted = false;  
          `,
        },
      },
    ],
  },
};
