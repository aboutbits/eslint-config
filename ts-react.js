const eslintPluginBetterTailwindcss = require('eslint-plugin-better-tailwindcss')
const {
  getDefaultCallees,
  getDefaultVariables,
} = require('eslint-plugin-better-tailwindcss/api/defaults')

module.exports = {
  extends: [
    './ts.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-hooks', 'better-tailwindcss'],
  settings: {
    react: {
      version: 'detect'
    },
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
  rules: {
    curly: ['error', 'all'],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' }
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
  }
}
