import type { Configuration } from "webpack";
import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";
import path from "path";

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  externals: {
    "./cptable": "var cptable",
  },
  target: "electron-renderer",
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
};
