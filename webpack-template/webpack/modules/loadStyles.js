// Core
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { resolve } from "path";

// Constants
import { ROOT_DIR } from "../util/constants";
console.log(ROOT_DIR);
import getPost from "../../postcss.config";

// Scss
export const loadScss = (env) => {
  return env === "development"
    ? {
        module: {
          rules: [
            {
              test: /\.s[ac]ss$/,
              use: [
                {
                  loader: "style-loader",
                },
                {
                  loader: "css-loader",
                  options: { sourceMap: false },
                },
                {
                  loader: "sass-loader",
                  options: { sourceMap: false },
                },
              ],
            },
          ],
        },
      }
    : {
        plugins: [
          new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
          }),
        ],
        module: {
          rules: [
            {
              test: /\.s[ac]ss$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                },
                {
                  loader: "css-loader",
                  options: { sourceMap: false },
                },
                {
                  loader: "postcss-loader",
                  options: {
                    config: { path: resolve(__dirname, "postcss.config.js") },
                  },
                },
                {
                  loader: "sass-loader",
                  options: { sourceMap: false },
                },
              ],
            },
          ],
        },
      };
};
