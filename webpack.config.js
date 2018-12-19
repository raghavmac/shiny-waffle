const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Load ENV variables
require('dotenv').config();

const { NODE_ENV, PORT = 8100, SERVER_PORT = 3000 } = process.env;
const resolve = directory => path.resolve(__dirname, directory);
const isDev = NODE_ENV === 'dev' || 'local';

// Additional dev config
const entry = isDev ? ['eventsource-polyfill', 'react-hot-loader/patch'] : [];
const output = isDev ? { publicPath: `http://localhost:${PORT}/public` } : {};
const plugins = isDev ?
  [new webpack.HotModuleReplacementPlugin(), new WebpackBar({ color: '#1890ff' })] : [];

module.exports = {
  target: 'web',
  entry: [...entry, './src/client/index'],
  output: { path: resolve('./src/server/public'), ...output },
  devServer: {
    compress: true,
    contentBase: './src',
    port: PORT,
    stats: { children: false },
    watchOptions: {
      ignored: [resolve('package.json'), resolve('node_modules')]
    },
    proxy: {
      '*': { target: `http://localhost:${SERVER_PORT}` }
    }
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      api: resolve('src/client/api/'),
      actions: resolve('src/client/actions/'),
      assets: resolve('src/client/assets/'),
      components: resolve('src/client/components/'),
      containers: resolve('src/client/containers/'),
      helpers: resolve('src/client/helpers/'),
      reducers: resolve('src/client/reducers/'),
      constant: resolve('src/client/constants/')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: { fix: true }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2)$/,
        exclude: /node_modules/,
        use: 'url-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    ...plugins,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};