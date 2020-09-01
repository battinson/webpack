export default (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  // Presets
  const presets = [
    [
      "@babel/env",
      {
        debug: true,
        spec: true,
        loose: false,
        modules: false,
      },
    ],
    "@babel/react",
  ];

  //   if (process.env["ENV"] === "prod") {
  //     plugins.push();
  //   }

  // Plugins
  const plugins = ["@babel/plugin-proposal-class-properties"];

  return {
    presets,
    plugins,
  };
};
