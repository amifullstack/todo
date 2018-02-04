const path = require('path');

module.exports = {
  entry: {
    'js/build.js': './src/index.js',
  },
  output: {
    filename: '[name]',
    path: path.join(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
    ],
  },
};
