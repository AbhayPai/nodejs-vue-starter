const Path = require('path');
const CssNano = require('cssnano');
const SetMeUp = require('./setmeup');
const WEBPACK_DIR = Path.join(__dirname);
const CustomTimeHash = new Date().getTime();
const SOURCE_DIR = Path.join(__dirname, 'src');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: new SetMeUp({
        Path,
        SOURCE_DIR
    }).entry,

    output: {
        filename: 'public/js/[name].' + CustomTimeHash + '.js',
        path: WEBPACK_DIR
    },

    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: new SetMeUp({
            Path,
            SOURCE_DIR
        }).alias
    },

    module:{
        rules: [{
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: {
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc.json'
                },
            },
        }, {
            test: /\.vue$/,
            use: [
                'vue-loader',
            ],
            exclude: /node_modules/,
        }, {
            test: /\.(js)$/,
            use: [
                'babel-loader',
            ],
            exclude: /node_modules/,
        },{
            test: /\.(css|scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader'
                }
            ]
        }, {
            test: /\.(jpe?g|png|gif|ico|webp)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '/./images/[name].[ext]'
                    }
                }
            ],
        }, {
            test: /\.woff|woff2|eot|ttf|svg$/,
            use: {
                loader: 'url-loader'
            }
        }
    ]},

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                exclude: /\/node_modules/,
                extractComments: false,
                sourceMap: true,
                terserOptions: {
                    ie8: true,
                    mangle: true,
                    safari10: true,
                    compress: true,
                },
            })
        ]
    },

    plugins: [
        new VueLoaderPlugin(),

        new ManifestPlugin({
            filter: ({name}) => !name.endsWith('.php')
        }),

        new CleanWebpackPlugin({
            dry: false,
            verbose:  true,
            cleanOnceBeforeBuildPatterns: [
                'public/**/*',
                '!src/**/*',
                '!node_modules/**/*',
            ],
            cleanStaleWebpackAssets: false,
            dangerouslyAllowCleanPatternsOutsideProject: true
        }),

        new MiniCssExtractPlugin({
            filename: './public/css/[name].' + CustomTimeHash + '.css'
        }),

        new CopyWebpackPlugin(
            new SetMeUp({
                Path,
                SOURCE_DIR
            }).copyFiles
        ),

        new OptimizeCssAssetsPlugin({
            canPrint: true,
            cssProcessor: CssNano,
            cssProcessorPluginOptions: {
                preset: [
                    'default',
                    {
                        discardComments: {
                            removeAll: true
                        }
                    }
                ],
            },
        }),
    ].concat(
        new SetMeUp({
            Path,
            SOURCE_DIR,
            CustomTimeHash,
            HtmlWebpackPlugin,
        }).createHtml()
    )
};
