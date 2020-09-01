// Core
import HtmlWebpackPlugin from "html-webpack-plugin";
import { readdirSync } from "fs";

// Constants
import { HTML_DIR, ASSETS_DIR, PUG_DIR } from "../util/constants";

const pagesHtml = readdirSync(HTML_DIR);
const pagesPug = readdirSync(PUG_DIR).filter((page) => page.endsWith(".pug"));

console.log(pagesPug);

// Plugins for Html Pages
const pluginsForHtml = pagesHtml.map(
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

// Plugins for Pug Pages
const pluginsForPug = pagesPug.map((page) => {
  console.log(page);
  return new HtmlWebpackPlugin({
    template: `${PUG_DIR}/${page}`,
    title: `🚀 ${page === "index.pug" ? "Webpack" : page.replace(".pug", "")}`,
    favicon: `${ASSETS_DIR}/images/webpack.ico`,
    filename: page.replace(/\.pug/, ".html"),
  });
});

// Setup
export const setupHtml = () => ({
  plugins: pluginsForHtml,
});

export const setupPug = () => ({
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader",
        },
      },
    ],
  },
  plugins: pluginsForPug,
});
