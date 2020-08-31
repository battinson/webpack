// Core
import { merge } from "webpack-merge";

// Constants
import { DIST_DIR } from "../util/constants";

// Common Configuration
import getCommonConfig from "./webpack.common";

// Development Configuration
export default () =>
  merge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    output: {
      filename: "[name].js",
      path: DIST_DIR,
    },
  });
