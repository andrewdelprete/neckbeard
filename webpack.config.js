const webpack = require('webpack')
var path = require('path')

// Set Plugins for both Prod and Dev
const plugins = [ new webpack.NoErrorsPlugin() ]

module.exports = {
    entry: {
        index: [ path.resolve(__dirname + '/src') + '/index.js' ],
    },
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: "index.js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel']
            }
        ]
    },
    plugins
}
