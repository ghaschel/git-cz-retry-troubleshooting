module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'improvement', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
    'scope-enum': [0], // level: disabled
    'function-rules/scope-enum': [
      2, // level: error
      'always',
      (parsed) => {
        const scopePattern = /^[a-z\s]+$/;

        if (scopePattern.test(parsed.scope)) {
          return [true];
        }

        return [
          false,
          `Scope must contain only a-z lowercase characters. Current value: \x1b[33m${parsed.scope}\x1b[0m`,
        ];
      },
    ],
  },
};
