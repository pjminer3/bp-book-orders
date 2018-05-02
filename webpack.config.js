const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, '/app/client/src');
const DIST_DIR = path.join(__dirname, '/app/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/app/client/dist'),
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel-loader', 
        include : SRC_DIR,    
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  }
};

