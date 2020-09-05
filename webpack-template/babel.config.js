export default (api) => {
  const env = api.env();
  api.cache.using(() => process.env.NODE_ENV);

  // Presets
  const presets = [
    [
      "@babel/env",
      {
        debug: false,
        spec: true,
        loose: false,
        modules: false,
      },
    ],
    "@babel/react",
  ];

  // Plugins
  const plugins = ["@babel/plugin-proposal-class-properties"];

  if (env === "development") {
    plugins.push("react-hot-loader/babel");
  }

  return {
    presets,
    plugins,
  };
};
