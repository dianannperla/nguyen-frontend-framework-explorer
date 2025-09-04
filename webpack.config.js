const path = require('path');

const OUTPUT_DIRECTORY = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIRECTORY,
    publicPath: '/' // Added publicPath for output
  },
  devServer: {
    contentBase: OUTPUT_DIRECTORY,
    compress: true,
    port: 9000,
    allowedHosts: 'all' // Added allowedHosts for better compatibility
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      }
    ]
  }
};