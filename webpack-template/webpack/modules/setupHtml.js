// Core
import HtmlWebpackPlugin from "html-webpack-plugin";

// Constants
import { HTML_DIR } from "../util/constants";

// Setup
export const setupHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: `${HTML_DIR}/index.html`,
      title: "🚀 Webpack",
    }),
  ],
});
