var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.json?$/,
        loader: 'json'
      }
    ]
  },
  devServer: {
    contentBase: './app'
  },
  devtool: '#source-map'
};
