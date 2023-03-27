// Important notes
// 🚨 Configuration file must use ES5 not ES6
// that's why you will see "requires" not "imports"

// Importing an file routing manager
const path = require('path');
// Importing Extract Plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// We export a configuration object
// that will be used by webpack
module.exports = {
  
  // Adding a module to webpack
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    // Archivo css de salida
    filename: 'styles/app.css'
  })]
}