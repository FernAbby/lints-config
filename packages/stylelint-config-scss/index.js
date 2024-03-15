module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-order'],
  customSyntax: "postcss-scss",
  ignoreFiles: ['node_modules/**', '**/*.{js,jsx,ts,tsx,json,md}', 'dist/**', 'build/**'],
  rules: {
    'no-extra-semicolons': true,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}