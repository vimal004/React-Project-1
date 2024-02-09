const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.html',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'), // Update the output path to 'dist' directory
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  // Add other webpack configurations as needed...
};

