const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:"development",
    entry:  './public/src/index.js',
    output:{
        filename:'bundle-[chunkhash].js',
        path:path.resolve(__dirname,"dist/public")
    },
    devtool: "source-map",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        
                    }
                }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.sass$/,
                loader: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath:'./image/'
                        }
                    }],
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    outputPath:'./'
                }
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '~': path.resolve(__dirname, './public/js'),
        }
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            excludeChunks: [ 'server' ],
            favicon: "./public/favicon.ico"
        })
    ]
}