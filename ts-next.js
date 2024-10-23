module.exports = {
  extends: [
    './ts-react.js',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    curly: ['error', 'all'],
    '@next/next/no-img-element': 'off',
  },
}
