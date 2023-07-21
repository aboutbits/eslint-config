module.exports = {
  extends: [
    'next/core-web-vitals',
    './ts-react.js',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@next/next/no-img-element': 'off'
  }
}
