import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const nextBin = join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const swcBinary = join(
  projectRoot,
  "node_modules",
  "@next",
  "swc-darwin-arm64",
  "next-swc.darwin-arm64.node"
);

const args = process.argv.slice(2);
const candidates = [
  process.env.npm_node_execpath,
  process.env.NODE,
  process.execPath,
  "/usr/local/bin/node",
  "/opt/homebrew/bin/node",
  process.env.HOME
    ? join(process.env.HOME, ".nvm", "versions", "node", "v20.19.6", "bin", "node")
    : undefined
].filter(Boolean);

function canLoadSwc(nodePath) {
  if (!existsSync(nodePath)) return false;

  if (process.platform !== "darwin" || process.arch !== "arm64" || !existsSync(swcBinary)) {
    return true;
  }

  const result = spawnSync(
    nodePath,
    ["-e", `require(${JSON.stringify(swcBinary)})`],
    { cwd: projectRoot, stdio: "ignore" }
  );

  return result.status === 0;
}

const nodePath = candidates.find(canLoadSwc) || process.execPath;
const result = spawnSync(nodePath, [nextBin, ...args], {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
