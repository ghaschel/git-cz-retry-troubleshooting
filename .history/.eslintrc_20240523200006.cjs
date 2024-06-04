const config = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "@ae-studio/eslint-config/typescript",
    "@ae-studio/eslint-config/prettier",
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
