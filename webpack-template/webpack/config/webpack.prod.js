// Core
import { merge } from "webpack-merge";

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
  });
