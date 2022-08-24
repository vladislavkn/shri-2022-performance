const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

const DIST_PATH = path.resolve(__dirname, "docs");

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "production",
  devServer: {
    static: {
      directory: DIST_PATH,
    },
    port: 3000,
  },
  entry: {
    vendor: path.resolve(__dirname, "src", "vendors", "react-with-dom.js"),
    script: path.resolve(__dirname, "src", "scripts.js"),
  },
  output: {
    path: DIST_PATH,
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    chunkIds: "named",
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        // terserOptions: {
        //   https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        // },
      }),
    ],
  },
  externals: {
    react: "React",
  },
};

module.exports = config;
