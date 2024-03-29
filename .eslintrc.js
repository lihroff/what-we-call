// https://cn.eslint.org/docs/user-guide/configuring
export default {
  extends: ['eslint:recommended'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    NODE_ENV: 'readonly',
  },
  // 0 - OK, 1 - WARN, 2 - ERROR
  rules: {
    sourceType: 'module',
    allowImportExportEverywhere: 0,
  },
};
