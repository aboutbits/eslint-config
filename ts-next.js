module.exports = {
  extends: [
    './ts-react.js',
    'plugin:@next/next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@next/next/no-img-element': 'off'
  }
}
