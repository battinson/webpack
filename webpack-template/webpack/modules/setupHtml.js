// Core
import HtmlWebpackPlugin from "html-webpack-plugin";
import { readdirSync } from "fs";

// Constants
import { HTML_DIR, ASSETS_DIR } from "../util/constants";

const pages = readdirSync(HTML_DIR);
const plugins = pages.map(
  (page) =>
    new HtmlWebpackPlugin({
      template: `${HTML_DIR}/${page}`,
      title: `🚀 ${
        page === "index.html" ? "Webpack" : page.replace(".html", "")
      }`,
      favicon: `${ASSETS_DIR}/images/webpack.ico`,
      filename: page,
    })
);
console.log(plugins);

// Setup
export const setupHtml = () => ({
  plugins,
});
