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
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
     
        ]
    },
};
