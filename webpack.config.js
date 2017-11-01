const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({debug = false} = {}) => {
    const plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(debug ? 'development' : 'production')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            //可以指定多个 entryName，打出多个 common 包
            names: ['common', 'vendor', 'boot'], // 最后一项包含 webpack runtime
            minChunks: 2 // 被引用超过2次的模块放入common.js (对多页有意义，单页不会生成 common.js)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'web data',
            template: 'src/index.ejs',
            favicon: 'src/assets/images/favicon.png',
            chunks: ['boot', 'vendor', 'common', 'index']
        }),
        new HtmlWebpackPlugin({
            filename: 'manager.html',
            title: 'web data manager',
            template: 'src/index.ejs',
            favicon: 'src/assets/images/favicon.png',
            chunks: ['boot', 'vendor', 'common', 'manager']
        })
    ];
 
    return {
        devtool: debug ? 'eval-source-map' : 'hidden-source-map',
        entry: {
            index: './src/web/index.jsx',
            manager: './src/manager/index.jsx',
            vendor: [
                "antd",
                "axios",
                "react",
                "react-dom",
                "react-redux",
                "redux"
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: ''
        },
        resolve: {
            extensions: ['.jsx', '.js']
        },
        plugins,
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                },
                {
                    test: /\.jsx?$/,
                    include: [
                        path.resolve(__dirname, 'src')
                    ],
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: !debug
                            }
                        }]
                    })
                },
                {
                    test: /\.(sass|scss)/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                    minimize: !debug
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {sourceMap: true}
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                    minimize: !debug,
                                    outputStyle: 'expanded'
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(png|jpg|jpeg|bmp|gif)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(wav|mp3|aac|ogg|mp4)$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }]
                }
            ]
        },
        devServer: {
            host: 'localhost',
            port: 8010,
            historyApiFallback: false,
            disableHostCheck: true,
            hot: true
        }
    };
}
;
