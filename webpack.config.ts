import path from "path";

import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths, BuildPlatform } from "./config/build/types";

interface EnvVariables {
  mode: BuildMode;
  analyzer?: boolean;
  port: number;
  platform?: BuildPlatform;
}

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src"),
  public: path.resolve(__dirname, "public"),
};

export default (env: EnvVariables) => {
  const options = {
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  };

  return buildWebpack(options);
};
