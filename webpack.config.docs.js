const webpack = require('webpack')
var path = require('path')

const PROD = process.env.NODE_ENV == 'production' || null

// Setup Plugins
const plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(), // recommanded by webpack
    new webpack.NoErrorsPlugin() // recommanded by webpack
]

if (PROD) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
    plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    )
}

module.exports = {
    entry: {
        index: [ path.resolve(__dirname + '/docs-src') + '/index.js' ],
    },
    output: {
        path: path.resolve(__dirname + '/docs'),
        filename: "index.js",
    },
    devtool: "cheap-source-map",
    module: {
        loaders: [
            {
                test:    /\.html$/,
                exclude: /node_modules/,
                loader:  'file?name=[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    plugins,
    devServer: {
        contentBase: path.resolve(__dirname + '/docs-src'),
    }
}
