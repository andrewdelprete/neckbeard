const webpack = require('webpack')
var path = require('path')

// Setup Plugins
const plugins = [ new webpack.NoErrorsPlugin() ]

module.exports = {
    entry: {
        index: [ path.resolve(__dirname + '/docs-src') + '/index.js' ],
    },
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: "index.js",
    },
    module: {
        loaders: [
            {
                test:    /\.html$/,
                exclude: /node_modules/,
                loader:  'file?name=[name].[ext]'
            },
            {
                test: /\.js$/,
                loaders: ['babel']
            }
        ]
    },
    plugins,
    devServer: {
        contentBase: path.resolve(__dirname + '/docs-src'),
    }
}
