/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:perfectionist/recommended-natural"
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: "@typescript-eslint/parser"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname
  }
};
