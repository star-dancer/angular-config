import * as stylelint from "stylelint";
// eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-var-requires
const sortOrderSmacss = require("stylelint-config-property-sort-order-smacss/generate");
export const STYLELINT_CONFIG: stylelint.Config = {
  extends: ["stylelint-config-property-sort-order-smacss"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "order/properties-order": [sortOrderSmacss({ order: "flexible" })]
  },
  plugins: ["stylelint-scss"],
  processors: [],
  ignoreFiles: [],
  defaultSeverity: "error",
  customSyntax: "postcss-scss"
};
