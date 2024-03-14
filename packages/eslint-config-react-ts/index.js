module.exports = {
  parser: '@typescript-eslint/parser',
  // parserOptions是用来指定javaScript语言类型和风格，
  // sourceType用来指定js导入的方式，默认是script，设置为module，模块导入方式
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'unused-imports'],
  ignorePatterns: ['dist/', 'node_modules/', '**/*.min.js', '**/*.md'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-console': 'warn',
    'import/first': 'error',
    '@typescript-eslint/ban-ts-comment': 'off', // 禁用ts-ignore注释规则
  },
}
