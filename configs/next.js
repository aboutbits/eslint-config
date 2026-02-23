import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig } from 'eslint/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default defineConfig([
  // coreWebVitals includes Next recommended rules
  ...compat.extends('plugin:@next/next/core-web-vitals'),
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
])

// Alternative/modern approach:
// Working, but has some issues with the Next lint command (running with `next build`).
// This approach can probably be used with Next 16, as they removed Next lint completely.
//
// import next from '@next/eslint-plugin-next'
// import { defineConfig } from 'eslint/config'
// export default defineConfig([
//   {
//     files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
//     // coreWebVitals includes Next recommended rules
//     ...next.flatConfig.coreWebVitals,
//     rules: {
//       '@next/next/no-img-element': 'off',
//     },
//   },
// ])
