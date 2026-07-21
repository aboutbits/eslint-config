# @aboutbits/eslint-config

AboutBits' [ESLint](https://eslint.org/) config presets.

This package targets **ESLint 9 (flat config)** and ships a set of composable presets for our TypeScript, React, Next.js, Tailwind CSS and related projects. All plugins are bundled as direct dependencies, so you only need to install ESLint itself and a few peer tools.

## Table of content

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Presets](#presets)
  - [Basic setup](#basic-setup)
  - [Combining presets](#combining-presets)
  - [Ignoring files](#ignoring-files)
  - [Overriding rules](#overriding-rules)
- [Scripts](#scripts)
- [Preset-specific notes](#preset-specific-notes)
  - [Prettier](#prettier)
  - [Tailwind CSS](#tailwind-css)
  - [Next.js](#nextjs)
  - [Storybook](#storybook)
  - [FormatJS](#formatjs)
- [Build & Publish](#build--publish)
- [Information](#information)

## Requirements

- **ESLint** `^9` (flat config, i.e. an `eslint.config.js` file)

## Installation

Install the config together with its required peer dependencies:

```sh
npm i -D @aboutbits/eslint-config eslint prettier typescript
```

Unlike the previous (ESLint 8) version, you no longer need to install `@typescript-eslint/*`, `eslint-plugin-import`, `eslint-plugin-react` and the rest by hand — they are bundled with this package.

Some presets rely on additional peer dependencies that you install only when you use them:

| Preset      | Additional peer dependency                          |
| ----------- | --------------------------------------------------- |
| `next`      | `@next/eslint-plugin-next` (`^14 \|\| ^15 \|\| ^16`) |
| `storybook` | `eslint-plugin-storybook` (`^10`)                   |

We also recommend using our shared Prettier config — see [Prettier](#prettier).

## Configuration

### Presets

Start from the base preset and add optional presets as needed. Each preset is imported from `@aboutbits/eslint-config/configs/<name>`.

**Base**

- **`configs/ts`** — Base configuration for all TypeScript projects. Enables type-aware linting, import ordering, `unused-imports`, Prettier integration and JSON/JSONC linting.

**Optional**

- **`configs/react`** — Rules for React projects (React, React Hooks, JSX a11y).
- **`configs/next`** — Rules for Next.js projects (Core Web Vitals).
- **`configs/tailwind`** — Rules for Tailwind CSS (via `eslint-plugin-better-tailwindcss`).
- **`configs/formatjs`** — Rules for FormatJS / `react-intl` usage and translation files.
- **`configs/jest`** — Rules for Jest tests.
- **`configs/storybook`** — Rules for Storybook stories and `.mdx` docs.

### Basic setup

Create an `eslint.config.js` file in the root of your project:

```js
import ts from '@aboutbits/eslint-config/configs/ts'

export default [...ts]
```

> Each preset is an array of flat-config objects, so spread it with `...`.
> Type-aware linting is enabled automatically (via the TypeScript project service) — you do **not** need to set `parserOptions.project`.

### Combining presets

Add optional presets after the base preset. A typical Next.js + Tailwind project looks like this:

```js
import ts from '@aboutbits/eslint-config/configs/ts'
import react from '@aboutbits/eslint-config/configs/react'
import next from '@aboutbits/eslint-config/configs/next'
import tailwind from '@aboutbits/eslint-config/configs/tailwind'
import formatjs from '@aboutbits/eslint-config/configs/formatjs'

export default [...ts, ...react, ...next, ...tailwind, ...formatjs]
```

### Ignoring files

Add an object with an `ignores` key. Note that in flat config an object containing **only** `ignores` applies globally:

```js
import ts from '@aboutbits/eslint-config/configs/ts'

export default [...ts, { ignores: ['node_modules', 'dist', '.next'] }]
```

### Overriding rules

Append your own flat-config object after the presets:

```js
import ts from '@aboutbits/eslint-config/configs/ts'

export default [
  ...ts,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      // your overrides...
      'no-console': 'off',
    },
  },
]
```

## Scripts

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint --cache .",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

Then run:

```sh
npm run lint      # Check for issues
npm run lint:fix  # Fix issues automatically
```

## Preset-specific notes

### Prettier

The `ts` preset integrates Prettier through `eslint-plugin-prettier`, so formatting problems are reported (and auto-fixed) by ESLint. You still need a Prettier configuration. We recommend our shared config:

```sh
npm i -D @aboutbits/prettier-config
```

```json
{
  "prettier": "@aboutbits/prettier-config"
}
```

### Tailwind CSS

The `tailwind` preset is preconfigured to recognise classes in `className` props as well as `classNames`/`*ClassName(s)` helpers. It supports both Tailwind 3 and 4, but you must tell the plugin where your Tailwind setup lives.

**Tailwind 4** — point to your CSS entry point:

```js
import tailwind from '@aboutbits/eslint-config/configs/tailwind'

export default [
  ...tailwind,
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/app.css',
      },
    },
  },
]
```

**Tailwind 3** — point to your config file:

```js
import tailwind from '@aboutbits/eslint-config/configs/tailwind'

export default [
  ...tailwind,
  {
    settings: {
      'better-tailwindcss': {
        tailwindConfig: 'tailwind.config.js',
      },
    },
  },
]
```

### Next.js

Install `@next/eslint-plugin-next` as a dev dependency, matching your installed Next.js version:

```sh
npm i -D @next/eslint-plugin-next
```

### Storybook

Install `eslint-plugin-storybook` as a dev dependency, matching your installed Storybook version:

```sh
npm i -D eslint-plugin-storybook
```

### FormatJS

The `formatjs` preset enforces our message conventions and additionally sorts the keys of translation files under any `translations/` directory (`**/translations/*.json`).

## Build & Publish

To build and publish the package, visit the GitHub Actions page of the repository.

You can choose between two workflows:

- `Release Package` to publish a new version of the package.
- `Pre-Release Package` to publish a new pre-release version of the package.

**Note:** Pre-releases need to be supplied with a pre-id.

**Note:** To increment a pre-release, you have to run the normal release workflow and select "prerelease". For this action you need to already be on a pre-release version.

## Information

AboutBits is a company based in South Tyrol, Italy. You can find more information about us
on [our website](https://aboutbits.it).

### Support

For support, please contact [info@aboutbits.it](mailto:info@aboutbits.it).

### Credits

- [All Contributors](../../contributors)

### License

The MIT License (MIT). Please see the [license file](license.md) for more information.
