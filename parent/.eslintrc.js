module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off'
  }
}
