// Core
import webpack from "webpack";
import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware";

// Production Configuration
import getDevConfig from "../config/webpack.dev";

// Constants
import { HOST, PORT, DIST_DIR } from "../util/constants";

// Compiler
const compiler = webpack(getDevConfig());

const app = express();
const staticMiddleware = express.static(DIST_DIR);

const devMiddleware = webpackDevMiddleware(compiler, getDevConfig().devServer);
app.use(devMiddleware);
app.use(staticMiddleware);

app.listen(PORT, HOST, () => console.log("Server is running..."));
