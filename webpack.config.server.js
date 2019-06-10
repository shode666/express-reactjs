const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    entry: {
        server: './server.js',
    },
    devServer: {
        contentBase: './dist',
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist"),
        libraryTarget: 'commonjs'
    },
    target: 'node',
    node: {
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[
                            '@babel/plugin-transform-runtime',
                            ['@babel/plugin-proposal-pipeline-operator',{proposal:'minimal'}]
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
              }
        ]
    }
}