module.exports = {
  extends: ['plugin:vue/recommended', '@vue/airbnb'],

  root: true,

  env: {
    node: true,
    browser: true,
    webextensions: true,
  },

  rules: {
    'no-console': 'off',
    'import/extensions': [1, { vue: 'never' }],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};
