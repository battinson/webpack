// Core
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
            filename: "[name].[contenthash].css",
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
                  loader: "sass-loader",
                  options: { sourceMap: false },
                },
              ],
            },
          ],
        },
      };
};
