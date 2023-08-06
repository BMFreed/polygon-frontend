module.exports = {
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['strictCamelCase'],
    },
    {
      selector: ['enum', 'class'],
      format: ['StrictPascalCase'],
    },
    {
      selector: ['enumMember'],
      format: ['UPPER_CASE'],
    },
    {
      selector: ['interface'],
      format: ['StrictPascalCase'],
      prefix: ['I'],
    },
    {
      selector: ['typeAlias'],
      format: ['StrictPascalCase'],
      prefix: ['T'],
    },
    {
      selector: ['objectLiteralProperty'],
      format: null,
      modifiers: ['requiresQuotes'],
    },
  ],
}
