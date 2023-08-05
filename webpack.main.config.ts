import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/main.ts",
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    fallback: {
      fs: require.resolve("fs"),
      path: require.resolve("path"),
      zlib: require.resolve("zlib"),
      http: require.resolve("http"),
      https: require.resolve("https"),
      url: require.resolve("url"),
    },
  },
};
