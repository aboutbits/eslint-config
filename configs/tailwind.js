import { defineConfig } from 'eslint/config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import {
  getDefaultCallees,
  getDefaultVariables,
} from 'eslint-plugin-better-tailwindcss/api/defaults'

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      // Recommended rules
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,

      // Configure rules
      'better-tailwindcss/enforce-consistent-line-wrapping': ['off'], // This rule is not compatible with prettier
      'better-tailwindcss/enforce-consistent-class-order': [
        'error',
        {
          // Use official Tailwind CSS class order to be in line with the Prettier plugin
          order: 'official',
        },
      ],

      // Additional rules
      'better-tailwindcss/enforce-consistent-variable-syntax': ['error'],
      'better-tailwindcss/enforce-consistent-important-position': ['error'],
      'better-tailwindcss/enforce-shorthand-classes': ['error'],
      'better-tailwindcss/no-deprecated-classes': ['error'],
      'better-tailwindcss/no-conflicting-classes': ['error'],
    },
    settings: {
      'better-tailwindcss': {
        callees: [
          ...getDefaultCallees(),
          [
            'classNames',
            [
              { match: 'strings' },
              {
                match: 'objectKeys',
                pathPattern: '.*',
              },
              {
                match: 'objectValues',
                pathPattern: '.*',
              },
            ],
          ],
        ],
        variables: [...getDefaultVariables(), '.*ClassNames?$'],
      },
    },
    /*
  settings: {
    'better-tailwindcss': {
      // Entrypoint for Tailwind CSS 4
      entryPoint: 'styles/index.css',
    },
  },
  */
  },
])
