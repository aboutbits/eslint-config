import { defineConfig } from 'eslint/config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { getDefaultSelectors } from 'eslint-plugin-better-tailwindcss/api/defaults'
import { SelectorKind } from 'eslint-plugin-better-tailwindcss/types'

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    extends: [eslintPluginBetterTailwindcss.configs['recommended-error']],
    rules: {
      // Configure rules
      'better-tailwindcss/enforce-consistent-line-wrapping': ['off'], // This rule is not compatible with prettier

      // Additional rules
      'better-tailwindcss/enforce-consistent-variable-syntax': ['error'],
      'better-tailwindcss/enforce-consistent-important-position': ['error'],
      'better-tailwindcss/enforce-shorthand-classes': ['error'],
    },
    settings: {
      'better-tailwindcss': {
        selectors: [
          ...getDefaultSelectors(),
          {
            kind: SelectorKind.Callee,
            match: [
              { type: 'strings' },
              { type: 'objectValues', pathPattern: '.*' },
              { type: 'objectKeys', pathPattern: '.*' },
            ],
            name: '^classNames$',
          },
          {
            kind: SelectorKind.Variable,
            match: [
              { type: 'strings' },
              { type: 'objectValues', pathPattern: '.*' },
              { type: 'objectKeys', pathPattern: '.*' },
            ],
            name: '.*[cC]lassNames?$',
          },
        ],
      },
    },
    /*
    settings: {
      'better-tailwindcss': {
        // Entrypoint for Tailwind CSS 4
        entryPoint: 'styles/index.css',
        // Entrypoint for Tailwind CSS 3
        tailwindConfig: 'tailwind.config.js',
      },
    },
    */
  },
])
