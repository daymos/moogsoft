 /* eslint-disable */

var path =require( 'path');
var webpack = require('webpack');

module.exports = {
  // entry point for the bundle, path and filename
  entry: ['./app/js/index.js'],
  // output directory as an absolute path
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'stage-2'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  resolve: {
      extensions: ['', '.js', '.css']
  }
};
