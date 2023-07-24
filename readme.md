# @aboutbits/eslint-config

[![npm package](https://badge.fury.io/js/%40aboutbits%2Feslint-config.svg)](https://badge.fury.io/js/%40aboutbits%2Feslint-config)
[![license](https://img.shields.io/github/license/aboutbits/eslint-config)](https://github.com/aboutbits/eslint-config/blob/main/license.md)

AboutBit's [ESLint](https://eslint.org/) config presets

## Table of content

- [Usage](#usage)
  - [TypeScript](#typescript)
  - [TypeScript + React](#typescript--react)
  - [TypeScript + Next.js](#typescript--nextjs)
  - [FormatJS](#formatjs)
  - [Combining presets](#combining-presets)
  - [Overriding Rules](#overriding-rules)
- [Build & Publish](#build--publish)
- [About](#about)

## Usage

Install the package:

```sh
npm i -D @aboutbits/eslint-config
```

We recommend linting by running `eslint` without `--ext` option. What files are to be linted should be specified inside the ESLint config and the TypeScript config.
All files included (or not ignored) by the ESLint config (`.eslintrc.json`) must be included by the TypeScript config (`tsconfig.json`).
For example, if this is your `.eslintrc.json`:

```json
{
  // ...remaining config
  "ignorePatterns": ["node_modules", "dist"]
}
```

You may include the following files inside your `tsconfig.json`:

```json
{
  // ...remaining config
  "exclude": ["node_modules", "dist"],
  "include": ["**/*.ts", "**/*.tsx"]
}
```

Should you have files that you want to be linted, but not inside your `tsconfig.json`, you can create a `tsconfig.eslint.json` file.
Then change `.eslintrc.json` to be:

```json
{
  // ...omitted
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  }
  // ...omitted
}
```

### TypeScript

Install the required packages, assuming that you have TypeScript already installed:

```sh
npm i -D eslint prettier @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-plugin-import
```

`.eslintrc.json`

```json
{
  "extends": "@aboutbits/eslint-config/ts",
  "parserOptions": {
    "project": true
  }
}
```

### TypeScript + React

Install the required packages, assuming that you have TypeScript already installed:

```sh
npm i -D eslint prettier @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

`.eslintrc.json`

```json
{
  "extends": "@aboutbits/eslint-config/ts-react",
  "parserOptions": {
    "project": true
  }
}
```

### TypeScript + Next.js

Install the required packages, assuming that you have TypeScript already installed:

```sh
npm i -D eslint prettier @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks @next/eslint-plugin-next
```

`.eslintrc.json`

```json
{
  "extends": "@aboutbits/eslint-config/ts-next",
  "parserOptions": {
    "project": true
  }
}
```

### FormatJS

Install the required packages, assuming that you have TypeScript already installed:

```sh
npm i -D eslint eslint-plugin-formatjs
```

`.eslintrc.json`

```json
{
  "extends": "@aboutbits/eslint-config/formatjs",
  "parserOptions": {
    "project": true
  }
}
```

### Combining presets

Most presets are mutually exclusive, which means that you should not combine them.
However, you may combine the preset `formatjs` with any other preset you like.
The following shows how to combine it with the preset `ts-next`:

Install the required packages, assuming that you have TypeScript already installed:

```sh
npm i -D eslint prettier @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks @next/eslint-plugin-next eslint-plugin-formatjs
```

`.eslintrc.json`

```json
{
  "extends": [
    "@aboutbits/eslint-config/ts-next",
    "@aboutbits/eslint-config/formatjs"
  ],
  "parserOptions": {
    "project": true
  }
}
```

### Overriding rules

`.eslintrc.json`

```json
{
  "extends": "@aboutbits/eslint-config/ts",
  "parserOptions": {
    "project": true
  },
  "rules": {
    // your rules...
  }
}
```

## Publish

To publish the package commit all changes and push them to main. Then run one of the following commands locally:

```sh
npm version patch
npm version minor
npm version major
```

## Information

AboutBits is a company based in South Tyrol, Italy. You can find more information about us
on [our website](https://aboutbits.it).

### Support

For support, please contact [info@aboutbits.it](mailto:info@aboutbits.it).

### Credits

- [All Contributors](../../contributors)

### License

The MIT License (MIT). Please see the [license file](license.md) for more information.
