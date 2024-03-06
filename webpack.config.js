const path = require("path");
const uiBuildPath = path.resolve(__dirname, "ui");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ui = {
    entry: "./ui-src/src/index.tsx",
    output: {
        filename: "ui.js",
        path: path.resolve(uiBuildPath),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "esbuild-loader",
                options: {
                    loader: "tsx", // Or 'ts' if you don't need tsx
                    target: "es2015",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: true,
            minify: false,
        }),
        new ProvidePlugin({
            React: "react",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: "eval-source-map",
};

module.exports = [ui];
