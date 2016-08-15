const webpack = require('webpack')
var path = require('path')

// Set Plugins for both Prod and Dev
const plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
    })
]

module.exports = {
    entry: [ path.resolve(__dirname + '/src') + '/index.js' ],
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: "index.js",
        libraryTarget: "umd"
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
    plugins
}
