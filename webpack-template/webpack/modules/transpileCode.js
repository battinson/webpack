// Babel Loader
export const useBabelLoader = () => ({
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {},
        },
      },
    ],
  },
});
