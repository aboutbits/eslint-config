import eslint from '@eslint/js'
import json from '@eslint/json'
import { defineConfig } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import { configs as tseslintConfigs } from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [
      eslint.configs.recommended,
      tseslintConfigs.strictTypeChecked,
      tseslintConfigs.stylisticTypeChecked,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslintPluginPrettierRecommended,
    ],
    plugins: {
      'unused-imports': unusedImports,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
          allowAny: false,
          allowNullish: false,
          allowBoolean: false,
          allowRegExp: false,
          allowNever: false,
        },
      ],
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-deprecated': 'warn',
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
            caseInsensitive: false,
          },
          'newlines-between': 'never',
          warnOnUnassignedImports: true,
          named: true,
        },
      ],
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'assert'],
        },
      ],
      'no-implicit-coercion': 'error',
      curly: ['error', 'all'],
      'object-shorthand': ['error'],
      eqeqeq: 'error',

      // Rules for eslint-plugin-unused-imports
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: [tseslintConfigs.disableTypeChecked],
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    plugins: { json },
    language: 'json/json',
    extends: [eslintPluginPrettierRecommended, json.configs.recommended],
  },
])
