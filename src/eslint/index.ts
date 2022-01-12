import { Linter } from "eslint";

import { HTML_CONFIG, JAVASCRIPT_CONFIG, TYPESCRIPT_CONFIG } from "./overrides";

const ESLINT_CONFIG: Linter.Config = {
  root: true,
  overrides: [HTML_CONFIG, TYPESCRIPT_CONFIG, JAVASCRIPT_CONFIG]
};

export { ESLINT_CONFIG };
