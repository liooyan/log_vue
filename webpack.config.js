let path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
let HtmlWebpackPlugin = require("html-webpack-plugin")
let {CleanWebpackPlugin} = require("clean-webpack-plugin")


module.exports = {
    devtool: "source-map",
    mode: 'production',
    entry: './src/App.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // 设置别名
        alias: {
            '@': path.resolve('src')// 这样配置后 @ 可以指向 src 目录
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    reactivityTransform: true
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ]
}