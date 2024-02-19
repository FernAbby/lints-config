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
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'unused-imports', 'prettier'],
  ignorePatterns: ['dist/', 'node_modules/', '**/*.min.js', '**/*.md'],
}