module.exports = {
  plugins: ['formatjs'],
  rules: {
    'formatjs/enforce-default-message': ['error', 'literal'],
    'formatjs/enforce-placeholders': 'error',
    'formatjs/no-multiple-whitespaces': 'error',
    'formatjs/enforce-id': 'error'
  }
}
