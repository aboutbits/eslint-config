import { defineConfig } from 'eslint/config'
import jestPlugin from 'eslint-plugin-jest'

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    ...jestPlugin.configs['flat/recommended'],
  },
])
