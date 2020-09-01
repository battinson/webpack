// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR } from "../util/constants";

// Modules
import * as modules from "../modules";

// Env
const env = process.env.NODE_ENV;

// Common Configuration
export default () =>
  merge(
    {
      entry: {
        main: [SRC_DIR],
      },
    },
    modules.setupHtml(),
    modules.useCleanPlugin(env),
    modules.loadScss()
  );
