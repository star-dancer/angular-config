import ESLintWebpackPlugin from "eslint-webpack-plugin";
const ESLINT_PLUGIN = new ESLintWebpackPlugin({
  extensions: ["ts", "js", "html"],
  exclude: ["node_modules", "dist"],
  threads: true,
  emitError: true,
  emitWarning: true,
  failOnError: true
});
export { ESLINT_PLUGIN };
