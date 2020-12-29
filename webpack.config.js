const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    contentBase: "./public",
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
      ],
    }],
  },
  plugins: [
    new Dotenv(),
  ],
};
