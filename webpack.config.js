const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./client/client.js'],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

};

// module.exports = {
//   devtool: 'inline-source-map',
//   entry: {
//     'js/build.js': './client/client.js',
//   },
//   output: {
//     filename: '[name]',
//     path: path.join(__dirname, 'public'),
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//     ],
//   },

// };
