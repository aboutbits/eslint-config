module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  overrides: [
    {
      extends: ['plugin:prettier/recommended'],
      files: ['./**/*.json'],
      // TODO: Check why this rule has to be disabled for JSON files.
      rules: {
        "@typescript-eslint/no-unused-expressions": "off"
      }
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^[iI]gnored',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^ignore'
      }
    ],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        'allowNumber': true,
        'allowNullish': false,
        'allowBoolean': false,
        'allowRegExp': false,
        'allowNever': false,
      }
    ],
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'type'
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
        warnOnUnassignedImports: true,
        named: true
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'assert']
      }
    ],
    'no-implicit-coercion': 'error',
    curly: ['error', 'all'],
    'object-shorthand': ['error'],
    eqeqeq: 'error',
    'arrow-body-style': 'error'
  }
}
