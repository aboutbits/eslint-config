# @aboutbits/eslint-config

[![npm package](https://badge.fury.io/js/%40aboutbits%2Feslint-config.svg)](https://badge.fury.io/js/%40aboutbits%2Feslint-config)
[![license](https://img.shields.io/github/license/aboutbits/eslint-config)](https://github.com/aboutbits/eslint-config/blob/main/license.md)

AboutBit's [ESLint](https://eslint.org/) config presets

## Table of content

- [Usage](#usage)
  - [TypeScript](#typescript)
  - [TypeScript + React](#typescript--react)
  - [TypeScript + Next.js](#typescript--nextjs)
- [Build & Publish](#build--publish)
- [About](#about)

## Usage

Install the package:

```sh
npm i -D @aboutbits/eslint-config
```

### TypeScript

`.eslintrc`

```sh
{
  "extends": "@aboutbits"
}
```

### TypeScript + React

Install the required packages:

```sh
npm i -D eslint-plugin-react eslint-plugin-react-hooks
```

`.eslintrc`

```sh
{
  "extends": "@aboutbits/react"
}
```

### TypeScript + Next.js + FormatJS

Install the required packages:

```sh
npm i -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-formatjs
```

`.eslintrc`

```sh
{
  "extends": "@aboutbits/next"
}
```

### Overriding rules

```sh
{
  "extends": "@aboutbits",
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
