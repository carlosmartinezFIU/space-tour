const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry: {
        index: path.resolve(__dirname, 'src/home.js'),
        desty: path.resolve(__dirname,'src/destination.js'),
        crew: path.resolve(__dirname, 'src/crew.js'),
        technology: path.resolve(__dirname,'src/technology.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        watchFiles: [path.resolve(__dirname, 'src')],
        open: true,
        hot: true,
    },
    module: {
        rules: [
            //css
            { test: /\.css$/i, use: ['style-loader', 'css-loader']},
            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource', },
            //js for babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temps/index.html'),
            chunks: ['index'],
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'destination.html',
            template: path.resolve(__dirname, 'src/temps/dest.html'),
            chunks: ['desty'],
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'crew.html',
            template: path.resolve(__dirname, 'src/temps/crew.html'),
            chunks: ['crew'],
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'technology.html',
            template: path.resolve(__dirname, 'src/temps/tech.html'),
            chunks: ['technology'],
            inject: true,
        })
    ],
}