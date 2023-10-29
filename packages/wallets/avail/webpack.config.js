//webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./index.ts",
  },
  output: {
    path: path.resolve(__dirname, '.'),
    filename: "avail-wallet-bundle.js", // <--- Will be compiled to this single file
    library: {
      type: "module"
    }
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    modules: [
      path.join(__dirname, './node_modules')
    ],
    extensions: [".ts", ".js",],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};
