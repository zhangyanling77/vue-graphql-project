module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "import/prefer-default-export": "off"
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
