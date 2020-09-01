// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR } from "../util/constants";

// Modules
import * as modules from "../modules";

// Common Configuration
export default () =>
  merge(
    {
      entry: {
        main: [SRC_DIR],
      },
    },
    modules.setupHtml()
  );
