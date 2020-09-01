// Core
import { CleanWebpackPlugin } from "clean-webpack-plugin";

// Constants
import { DIST_DIR, BUILD_DIR } from "../util/constants";

// CleanPlugin
export const useCleanPlugin = (env) => ({
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      root: env === "development" ? DIST_DIR : BUILD_DIR,
    }),
  ],
});
