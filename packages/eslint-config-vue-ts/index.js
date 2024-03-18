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
  plugins: ['import'],
  parser: 'vue-eslint-parser', // 解析.vue文件
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析<script>标签中的代码
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  ignorePatterns: ['dist', 'build', 'node_modules', '**/*.min.js', '**/*.md', '**/*.css'],
  rules: {
    // eslint-plugin-import 导入顺序
    'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],
  },
};
