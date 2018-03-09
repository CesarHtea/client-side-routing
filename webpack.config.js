module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist/[name].min.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  devServer: {
    contentBase: './dist'
  }
}
