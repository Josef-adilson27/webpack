const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    devtool: 'inline-source-map',
    entry: "./src/index3.ts",
    
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },

    plugins: [new HtmlWebpackPlugin({
      template:'./public/index.html'
    })],

    module:  {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

  };
};
