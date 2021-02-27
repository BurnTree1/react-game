const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const _ = require('lodash')
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            Actions: path.resolve(__dirname, 'src/store/actions/'),
            Assets: path.resolve(__dirname, 'src/assets/'),
            Helpers: path.resolve(__dirname, 'src/store/helpers/')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        overlay: true,
        open: true
    }
};