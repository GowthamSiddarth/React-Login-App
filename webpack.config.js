var path = require('path');

var config = {
    entry: path.resolve(__dirname) + "\\js\\main.js",
    output: {
        path: path.resolve(__dirname) + "\\js",
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 8888
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}

module.exports = config