module.exports = {
  extends: [
    "next/core-web-vitals",
    "./react.js",
    "plugin:prettier/recommended"
  ],
  plugins: ["formatjs"],
  rules: {
    "@next/next/no-img-element": "off",
    "formatjs/enforce-default-message": ["error", "literal"],
    "formatjs/enforce-placeholders": "error",
    "formatjs/no-multiple-whitespaces": "error",
    "formatjs/enforce-id": "error"
  }
}
