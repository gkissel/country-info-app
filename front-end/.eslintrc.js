/** @type { import('eslint').Linter.Config } */
module.exports = {
  extends: [
    '@rocketseat/eslint-config/next',
    'next/core-web-vitals',
    'next/typescript',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
        insertPragma: false,
      },
    ],
    semi: ['error', 'never'],
    '@typescript-eslint/no-empty-interface': 'off',
  },
  ignorePatterns: ['package.json'],
}
