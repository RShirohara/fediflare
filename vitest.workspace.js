import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "./apps/*/vitest.config.js",
  "./packages/*/vitest.config.js"
]);
