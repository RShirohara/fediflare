import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import vitest from "eslint-plugin-vitest";

export default [
  { ignores: ["**/dist"] },
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2023,
        project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"]
      }
    },
    plugins: {
      "@typescript-eslint": ts
    },
    rules: {
      ...ts.configs["strict-type-checked"].rules,
      ...ts.configs["stylistic-type-checked"].rules,
      "no-undef": "off",
      "@typescript-eslint/consistent-type-exports": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-import-type-side-effects": "warn"
    }
  },
  {
    files: ["**/test/*.test.ts"],
    plugins: { vitest: vitest },
    rules: { ...vitest.configs.recommended.rules }
  },
  {
    rules: {
      ...prettier.rules
    }
  }
];
