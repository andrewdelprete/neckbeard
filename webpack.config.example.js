const webpack = require('webpack')
var path = require('path')

// Setup Plugins
const plugins = [ new webpack.NoErrorsPlugin() ]

module.exports = {
    entry: {
        index: [ path.resolve(__dirname + '/example-src') + '/index.js' ],
    },
    output: {
        path: path.resolve(__dirname + '/example-build'),
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
        contentBase: path.resolve(__dirname + '/example-src'),
    }
}
