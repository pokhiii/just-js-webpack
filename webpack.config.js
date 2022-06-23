 const path = require('path');
 const Dotenv = require('dotenv-webpack');

 module.exports = {
  mode: 'development',
  devServer: {
    static: './dist',
  },
  plugins: [
    new Dotenv()
  ]
 };
