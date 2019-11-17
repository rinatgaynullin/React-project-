const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname,"static_src"),
    output: {
        path: path.resolve(__dirname,"static/build"),
        filename: 'app.js',
    },

    watch: process.argv[process.argv.length - 1] === 'development',

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: path.resolve(__dirname, "static_src"),
                exclude: path.resolve(__dirname,'node_modules'),
                use: {
                    loader: 'babel-loader?cacheDirectory=true',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        plugins: [
                            [
                                "@babel/plugin-proposal-class-properties",
                                {
                                    "loose": true
                                }
                            ]
                        ]
                    }
                },
                
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ]
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    devtool: 'cheap-inline-module-source-map',

};