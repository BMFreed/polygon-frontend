module.exports = {
  'jsdoc/require-jsdoc': [
    'error',
    {
      contexts: [
        'TSPropertySignature',
        'MethodDefinition',
        'ClassDeclaration',
        'ArrowFunctionExpression',
      ],
    },
  ],
  'jsdoc/require-param': 'off',
  'jsdoc/require-returns': 'off',
}
