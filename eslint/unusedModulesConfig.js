module.exports = {
  rules: {
    'import/no-unused-modules': [
      'error',
      {
        unusedExports: true,
        ignoreExports: ['**/*config.ts', '**/index.ts'],
      },
    ],
  },
}
