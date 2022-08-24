const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

const DIST_PATH = path.resolve(__dirname, "dist");

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
    script: path.resolve(__dirname, "src", "scripts.js"),
    vendor: path.resolve(__dirname, "src", "vendors", "react-with-dom.js"),
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
    minimizer: [new CssMinimizerPlugin()],
  },
  externals: {
    react: "React",
  },
};

module.exports = config;
