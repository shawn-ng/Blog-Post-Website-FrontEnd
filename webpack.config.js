const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env =
  process.env.NODE_ENV === 'production'
    ? new webpack.EnvironmentPlugin({ ...process.env })
    : new Dotenv()

module.exports = (webpackEnv) => {
  const publicPath =
    webpackEnv.NODE_ENV === 'local'
      ? {
          publicPath: '/',
        }
      : {}
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve('./build'),
      ...publicPath,
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
        // {
        //   test: /\.s(a|c)ss$/,
        //   use: ['style-loader', 'css-loader', 'sass-loader'],
        // },
        { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    devServer: {
      hot: true,
      open: true,
      port: 3000,
      historyApiFallback: true,
      // proxy: {
      //   '/api/gg': {
      //     bypass: (req, res) =>
      //       res.send({
      //         mssg: 'proxy server - Message came from bypass property in webpack',
      //       }),
      //   },
      // },
    },
    plugins: [
      new Dotenv(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body',
      }),
      env,
      // new MiniCssExtractPlugin({
      //   filename: 'style.css',
      // }),
    ],
  }
}
