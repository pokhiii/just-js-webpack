 const path = require('path');
 const Dotenv = require('dotenv-webpack');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
  devServer: {
    static: './dist',
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'Just JS with webpack',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
   },
 };
