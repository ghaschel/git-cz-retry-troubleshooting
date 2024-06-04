const config = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  ignorePatterns: [
    ".husky/**/*",
    ".vscode/**/*",
    "out/**/*",
    "public/**/*",
    "node_modules/**/*",
    "__mock__/**/*",
    "webpack*",
    "src/workers/*.js"
  ],
};

module.exports = config;
