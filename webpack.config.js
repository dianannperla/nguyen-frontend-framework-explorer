const path = require('path');

const OUTPUT_DIRECTORY = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js', // Updated output filename for clarity
    path: OUTPUT_DIRECTORY,
    publicPath: '/' + OUTPUT_DIRECTORY.split(path.sep).pop() + '/' // Changed publicPath for consistency
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
        test: /(?:\.js|\.jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        }
      }
    ]
  },
  optimization: { // Added optimization settings
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  }
};