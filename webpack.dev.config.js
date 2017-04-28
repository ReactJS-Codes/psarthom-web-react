const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file
// disable the hot reload
module.exports.entry = [
    'babel-polyfill',
    module.exports.SRC_DIR + '/index.js'
];
// export css to a separate file
module.exports.module.loaders[1] = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!sass')
};
module.exports.plugins.push(
    new ExtractTextPlugin('../css/main.css')
);