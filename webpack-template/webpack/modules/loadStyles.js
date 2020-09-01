// Sass
export const loadScss = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: { sourceMap: false },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: false },
          },
        ],
      },
    ],
  },
});
