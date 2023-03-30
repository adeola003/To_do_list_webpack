const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'To do list webpack',
      header: 'To do list',
      metaDesc: 'Webpack Example Description',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  mode: 'development',
  output: {
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },

  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

};
