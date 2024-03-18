module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss'
  ],
  plugins: ['stylelint-order'],
  ignoreFiles: ['node_modules/**', '**/*.{js,jsx,ts,tsx,json,md}', 'dist/**', 'build/**'],
  rules: {
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}