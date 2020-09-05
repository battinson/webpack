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
      historyApiFallback: true,
      quiet: true,
      stats: {
        colors: true,
        chunks: false,
        modules: false,
      },
    },
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
    plugins: [new HotModuleReplacementPlugin()],
  });
