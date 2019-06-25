const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:"development",
    entry:  './public/index.js',
    output:{
        filename:'bundle-[hash].js',
        path:path.resolve(__dirname,"dist/public")
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
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
                            name: '[name].[ext]',
                            context: "./src",
                            outputPath:'./images',
                            useRelativePaths: true
                        }
                    }],
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath:'./'
                }
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '~': path.resolve(__dirname, './public/src'),
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            excludeChunks: [ 'server' ],
            favicon: "./public/favicon.ico"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
}