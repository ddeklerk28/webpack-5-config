const path = require('path');

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode,

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },

  devtool: "source-map",

  devServer: {
    static: path.join(__dirname, "dist"),
    // compress: true,
    // port: 3000,
    // open: true,
    // historyApiFallback: true,
  },
}