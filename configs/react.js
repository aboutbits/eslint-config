import { defineConfig } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      reactHooks.configs['recommended-latest'],
      jsxA11y.flatConfigs.strict,
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never', propElementValues: 'always' },
      ],
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'jsx-a11y/no-autofocus': 'off',
    },
  },
])
