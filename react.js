/** @type {import('eslint')} */
module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-hooks']
}
