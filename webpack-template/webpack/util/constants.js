// Core
import { resolve } from "path";
import { path as ROOT_DIR } from "app-root-path";

// Export of Constants
export const SRC_DIR = resolve(ROOT_DIR, "src");
export const DIST_DIR = resolve(ROOT_DIR, "dist");
export const BUILD_DIR = resolve(ROOT_DIR, "public");
export const HOST = "localhost";
export const PORT = 5001;
export const HTML_DIR = resolve(ROOT_DIR, "src/html");
