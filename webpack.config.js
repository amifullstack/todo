const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch', // RHL path
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js', // app entry point
  ],
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'public', 'js'),
    publicPath: '/js',
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, ''), // same as our app base path
    publicPath: '/js', // Now build file at localhost:8080/js/
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
