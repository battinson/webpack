// Core
import { merge } from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// Constants
import { BUILD_DIR } from "../util/constants";

// Common Configuration
import getCommonConfig from "./webpack.common";

// Production Configuration
export default () =>
  merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
    output: {
      filename: "[name].[contenthash].js",
      path: BUILD_DIR,
    },
    optimization: {
      usedExports: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendors",
            chunks: "all",
            test: /node_modules/,
            enforce: true,
          },
        },
      },
    },
    plugins: [new BundleAnalyzerPlugin()],
  });
