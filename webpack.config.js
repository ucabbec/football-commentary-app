const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: ['./src/App.tsx'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use:['babel-loader','awesome-typescript-loader']
      },
      {
        test:/\.(s*)css$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/public/webpack/'),
    filename: 'bundle.js',
  },
  plugins: [htmlPlugin]
};
