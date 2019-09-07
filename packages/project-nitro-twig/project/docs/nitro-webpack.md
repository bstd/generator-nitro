[![npm version](https://badge.fury.io/js/%40nitro%2Fwebpack.svg)](https://badge.fury.io/js/%40nitro%2Fwebpack)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/namics/generator-nitro.svg?branch=master)](https://travis-ci.org/namics/generator-nitro)

# Nitro Webpack

Configurable and easy to use webpack 4 config for nitro projects.

## Usage

```
const options = {
    rules: {
        js: {
            eslint: false,
        },
        ts: false,
        scss: {
            stylelint: false,
        },
        hbs: true,
        woff: true,
        image: true,
    },
    features: {
        banner: true,
        bundleAnalyzer: false,
    },
};
const webpackConfig = require('@nitro/webpack/webpack-config/webpack.config.dev')(options);

module.exports = webpackConfig;
```

## Configuration

### Rules

No loader rule is enabled by default. Activate following prepared rules you need in `options.rules`

#### `options.rules.js`

-   Type: boolean || object
-   default: false

-   `true` activates JavaScript support
-   `{ eslint: true }` additionally adds eslint live linting feature (only relevant for development build)

#### `options.rules.ts`

-   Type: boolean
-   default: false

`true` will activate TypeScript support

#### `options.rules.scss`

-   Type: boolean || object
-   default: false

-   `true` will activate scss support
-   `{ stylelint: true }` additionally adds stylelint live linting feature (only relevant for development build)

#### `options.rules.hbs`

-   Type: boolean
-   default: false

`true` will activate handlebars handlebars precompiled templates support

#### `options.rules.woff`

-   Type: boolean
-   default: false

`true` will activate woff font support (in CSS files)

#### `options.rules.image`

-   Type: boolean
-   default: false

`true` will activate image support ()

### `options.features`

Enable some additional features

#### `options.features.banner`

-   Type: boolean
-   default: true

(only relevant for production build)

`true` will add a text banner with infos from package.json to the bundled js & css

#### `options.features.bundleAnalyzer`

-   Type: boolean
-   default: false

`true` will add the bundleAnalyser plugin and opens a browser window with the stats

## Changelog

Recent changes can be viewed on Github on the [Releases Page](https://github.com/namics/generator-nitro/releases)
