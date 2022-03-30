const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'server/public/static'),
      filename: 'bundle.js',
      publicPath: '/static',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx', '.jsx'],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, '/server/public'),
      },
      headers: {
        hello: 'bye',
      },
      // compress: true,
      // port: 9000,
      proxy: {
        '/': { target: 'http://localhost:3000' },
      },
      // devMiddleware: {
      //   publicPath: "/server/public",
      // },
    },
    plugins: [
      // new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
      // new StyleLintPlugin({
      //   files: ['**/*.{css,scss,sass}'],
      // }),
    ],
  };
};
