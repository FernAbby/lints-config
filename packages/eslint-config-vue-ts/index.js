module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'import'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['dist/', 'build/', 'node_modules/', '**/*.min.js', '**/*.md', '**/*.css'],
  rules: {
    // eslint-plugin-import 导入顺序
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],
  },
};
