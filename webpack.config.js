const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { divContainer } = require('./src/div#content');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    about: './src/about.js',
    menu: './src/menu.js',
    divContent: './src/div#content'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "src/index.html",
    }),
  ],
  mode:"production"
};