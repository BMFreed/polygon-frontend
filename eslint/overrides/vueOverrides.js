module.exports = {
  files: ['*.vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  rules: {
    'vue/html-button-has-type': 'off',
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
  },
}
