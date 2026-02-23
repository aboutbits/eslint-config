import { defineConfig } from 'eslint/config'
import * as mdx from 'eslint-plugin-mdx'
import storybook from 'eslint-plugin-storybook'
import { configs as tseslintConfigs } from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    extends: [storybook.configs['flat/recommended']],
  },
  {
    ignores: ['!.storybook'],
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: false, // Disable linting of code blocks as it shows irrelevant errors.
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    extends: [tseslintConfigs.disableTypeChecked],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
])
