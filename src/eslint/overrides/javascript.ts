import { Linter } from "eslint";

import { SORT_CLASS_MEMBER_CONFIG } from "../rules";

const JAVASCRIPT_CONFIG: Linter.ConfigOverride = {
  files: ["*.js"],
  env: { es6: true },
  parserOptions: {
    ecmaVersion: 12
  },
  extends: [
    "plugin:unicorn/recommended",
    "plugin:eslint-comments/recommended",
    "prettier",
    "eslint:recommended"
  ],
  plugins: [
    "simple-import-sort",
    "eslint-comments",
    "sort-class-members",
    "unicorn",
    "prettier"
  ],
  rules: {
    semi: ["error", "always"],
    "sort-imports": "off",
    // 简易Import排序
    "simple-import-sort/imports": "error",
    // 简易Export排序
    "simple-import-sort/exports": "error",
    "sort-class-members/sort-class-members": SORT_CLASS_MEMBER_CONFIG,
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true }
    ],
    "unicorn/import-style": [
      "error",
      {
        styles: {
          path: {
            named: true
          }
        }
      }
    ],
    "unicorn/prefer-module": "off",
    "ntunicorn/prefer-node-protocol": "off"
  }
};
export { JAVASCRIPT_CONFIG };
