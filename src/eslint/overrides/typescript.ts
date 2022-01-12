import { Linter } from "eslint";

import { SORT_CLASS_MEMBER_CONFIG } from "../rules";

const TYPESCRIPT_CONFIG: Linter.ConfigOverride = {
  files: ["*.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: ["./tsconfig.json", "./configs/**/tsconfig.json"]
  },
  extends: [
    "plugin:eslint-plugin/recommended",
    "plugin:regexp/recommended",
    "plugin:rxjs/recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jsdoc/recommended",
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "prettier",
    "unicorn",
    "eslint-comments",
    "sort-class-members",
    "simple-import-sort",
    "jsdoc",
    "eslint-plugin-tsdoc",
    "@typescript-eslint",
    "@angular-eslint",
    "regexp",
    "eslint-plugin-tsdoc",
    "eslint-plugin",
    "rxjs"
  ],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/no-explicit-any": [2, { fixToUnknown: true }],
    "jsdoc/require-jsdoc": ["warn", { enableFixer: false, publicOnly: false }],
    "jsdoc/no-undefined-types": [
      "warn",
      { definedTypes: ["unknown", "never"] }
    ],
    "sort-class-members/sort-class-members": SORT_CLASS_MEMBER_CONFIG,
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    quotes: ["warn", "double"],
    semi: ["error", "always"],
    camelcase: "off",
    "no-useless-escape": "off",
    "sort-imports": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unicorn/prevent-abbreviations": "off",
    "@typescript-eslint/no-inferrable-types": [
      0,
      {
        ignoreParameters: false,
        ignoreProperties: false
      }
    ],
    "unicorn/filename-case": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-null": "off",
    "unicorn/import-style": "off",
    "unicorn/prefer-node-protocol": "off",
    "rxjs/no-sharereplay": ["error", { allowConfig: true }]
    // "tsdoc/syntax": "warn"
  }
};
export { TYPESCRIPT_CONFIG };
