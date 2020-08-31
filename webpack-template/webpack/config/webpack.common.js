// Constants
import { SRC_DIR, BUILD_DIR } from "../util/constants";

// Common Configuration
export default () => ({
  entry: {
    main: SRC_DIR,
  },
  output: {
    filename: "bundle.js",
    path: BUILD_DIR,
  },
});
