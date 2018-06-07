import resolve from 'path';

var config = {
    entry: './main.js',
    output: {
        path: resolve(__dirname),
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
            }
        ]
    }
}

module.exports = config