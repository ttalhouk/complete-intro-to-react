const path = require('path')

module.exports = {
  contex: __dirname,
  entry: './js/ClientApp.js',
  output:{
    path: path.join(__dirname,'/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
