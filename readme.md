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

### TypeScript

`.eslintrc`

```json
{
  "extends": "@aboutbits/ts"
}
```

### TypeScript + React

Install the required packages:

```sh
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

`.eslintrc`

```json
{
  "extends": "@aboutbits/ts-react"
}
```

### TypeScript + Next.js

Install the required packages, assuming that you have `next` already installed:

```sh
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

`.eslintrc`

```json
{
  "extends": "@aboutbits/ts-next"
}
```

### FormatJS

Install the required packages:

```sh
npm i -D eslint-plugin-formatjs
```

`.eslintrc`

```json
{
  "extends": "@aboutbits/formatjs"
}
```

### Combining presets

Most presets are mutually exclusive, which means that you should not combine them.
However, you may combine the preset `formatjs` with any other preset you like.
The following shows how to combine it with the preset `ts-next`:

Install the required packages, assuming that you have `next` already installed:

```sh
npm i -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-formatjs
```

`.eslintrc`

```json
{
  "extends": ["@aboutbits/ts-next", "@aboutbits/formatjs"]
}
```

### Overriding rules

`.eslintrc`

```json
{
  "extends": "@aboutbits/ts",
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
