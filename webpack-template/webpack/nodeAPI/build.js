// Core
import webpack from "webpack";
import chalk from "chalk";

// Production Configuration
import getProdConfig from "../config/webpack.prod";

// Compiler
const compiler = webpack(getProdConfig());

// Run
compiler.run((err, stats) => {
  // Configuration Errors
  if (err) {
    console.error(chalk.redBright(err.stack || err));
    if (err.details) {
      console.error(chalk.redBright(err.details));
    }
    return;
  }

  const info = stats.toJson();

  // Compilation Errors
  if (stats.hasErrors()) {
    console.error(chalk.redBright(info.errors));
  }

  // Compilation Warnings
  if (stats.hasWarnings()) {
    console.warn(chalk.yellowBright(info.warnings));
  }

  // Stats
  console.log(
    stats.toString({
      chunks: false,
      colors: true,
    })
  );
});
