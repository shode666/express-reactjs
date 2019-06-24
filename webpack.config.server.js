const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode:"development",
    entry: {
        server: './server/server.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
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
            }
        ]
    },

}