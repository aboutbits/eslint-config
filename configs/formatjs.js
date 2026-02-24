import { defineConfig } from 'eslint/config'
import formatjsPlugin from 'eslint-plugin-formatjs'
import jsonc from 'eslint-plugin-jsonc'

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    plugins: {
      formatjs: formatjsPlugin,
    },
    rules: {
      'formatjs/enforce-default-message': ['error', 'literal'],
      'formatjs/enforce-placeholders': 'error',
      'formatjs/no-multiple-whitespaces': 'error',
      'formatjs/enforce-id': 'error',
    },
  },
  {
    files: ['**/translations/*.json'],
    language: 'json/json',
    plugins: { jsonc },
    rules: {
      'jsonc/sort-keys': 'error',
    },
  },
])
