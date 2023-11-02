/** @type {import('@commitlint/types').UserConfig} */
const configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', ['upper-case']],
    'scope-empty': [1, 'never'],
    'header-max-length': [0, 'always', 72],
  },
};

module.exports = configuration;
