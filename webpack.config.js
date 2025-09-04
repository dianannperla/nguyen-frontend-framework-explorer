const path = require('path');

const OUTPUT_DIRECTORY = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIRECTORY,
    publicPath: '/dist/' // Changed publicPath to include the output directory
  },
  devServer: {
    contentBase: OUTPUT_DIRECTORY,
    compress: true,
    port: 8080, // Updated port for standardization
    allowedHosts: 'all' // Added allowedHosts for better compatibility
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        }
      }
    ]
  }
};