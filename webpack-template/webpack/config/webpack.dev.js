// Core
import { merge } from "webpack-merge";
import { HotModuleReplacementPlugin } from "webpack";

// Constants
import { DIST_DIR } from "../util/constants";

// Common Configuration
import getCommonConfig from "./webpack.common";

// Development Configuration
export default () =>
  merge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    entry: {
      main: ["webpack-hot-middleware/client"],
    },
    output: {
      filename: "[name].js",
      path: DIST_DIR,
    },
    devServer: {
      contentBase: DIST_DIR,
      overlay: true,
      hot: true,
      open: true,
    },
    plugins: [new HotModuleReplacementPlugin()],
  });
