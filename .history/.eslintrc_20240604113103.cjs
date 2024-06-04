const config = {
  root: true,
  extends: [
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  ],
  ignorePatterns: [
    ".next/**/*",
    ".husky/**/*",
    ".swc/**/*",
    ".vscode/**/*",
    "out/**/*",
    "public/**/*",
    "node_modules/**/*",
    "__mock__/**/*",
    "tailwind*",
    "webpack*",
    "src/workers/*.js",
    "src/scripts/**",
    "src/prisma/clients",
  ],
};

module.exports = config;
