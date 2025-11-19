import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import preferArrow from "eslint-plugin-prefer-arrow";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      "prefer-arrow": preferArrow,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      // Prefer arrow functions for function expressions
      "prefer-arrow/prefer-arrow-functions": [
        "warn",
        {
          "disallowPrototype": true,
          "singleReturnOnly": false,
          "classPropertiesAllowed": false
        }
      ],
      // Disallow named export specifiers like `export { a, b }` so authors
      // prefer individual export statements (`export const a = ...`).
      "no-restricted-syntax": [
        "warn",
        {
          "selector": "ExportNamedDeclaration[specifiers.0]",
          "message": "Prefer separate export statements (use `export const x = ...` instead of `export { x }`)."
        }
      ],
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
