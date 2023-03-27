module.exports = {
  // 启用的环境
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 继承其它配置
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // 默认 JS 版本
    sourceType: 'module' // ESM 模式
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {}
}
