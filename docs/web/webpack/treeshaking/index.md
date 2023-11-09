---
title: Tree Shaking [WIP]
---

import Image from "@site/src/components/Image";

# Tree Shaking

<Image src="/assets/tree-shaking.gif" alt="tree shaking banner" />

## 前情提要

:::caution

全文適用於 webpack 並且透過 babel 做轉譯的專案

:::

:::tip

在了解 Tree Shaking 前必須要先了解一些背景知識

1. `@babel/preset-env` 設置 `modules` 參數賦不同值的差異
2. Tree Shaking 是如何運作的
3. 達成 Tree Shaking 的必備條件
4. 如何恰當的撰寫 ESM 輕鬆 Tree Shaking

:::

## 什麼是 Tree Shaking

:::info

擷取自 Webpack 官方文件  
Tree shaking is a term commonly used in the JavaScript context for dead-code elimination

:::

> 換句話說，就是將你沒有用到的程式碼，在打包程式碼時，將他移除掉。

## `@babel/preset-env` 是什麼

:::tip

所有使用 babel 當作 transpiler 幾乎都會使用 `@babel/preset-env` 作為預設  
它可以迅速的讓我們撰寫的 script 依照 browserslist 欲兼容的瀏覽器版本  
提供符合的 polyfill 跟 syntax 降級  
而 `@babel/preset-env` 當中有個 options `modules`  
接下來將會對它多點介紹

:::

:::info

在 [`@babel/preset-env@7.23.2`](https://babeljs.io/docs/babel-preset-env#modules) 文件當中是這樣說明 modules 選項的

> `"amd"` | `"umd"` | `"systemjs"` | `"commonjs"` | `"cjs"` | `"auto"` | `false`, defaults to `"auto"`.
>
> Enable transformation of ES module syntax to another module type. Note that `cjs` is just an alias for `commonjs`.
>
> Setting this to `false` will preserve ES modules. Use this only if you intend to ship native ES Modules to browsers. If you are using a bundler with Babel, the default `modules: "auto"` is always preferred.
>
> `modules: "auto"`
>
> By default `@babel/preset-env` uses `caller` data to determine whether ES modules and module features (e.g. `import()`) should be transformed. Generally `caller` data will be specified in the bundler plugins (e.g. `babel-loader`, `@rollup/plugin-babel`) and thus it is not recommended to pass `caller` data yourself -- The passed `caller` may overwrite the one from bundler plugins and in the future you may get suboptimal results if bundlers supports new module features.

:::

意指透過設定 modules 選項可以將 ESM 語法轉換成其他的模組解析方式，  
其中可以將其設定為 `"amd"` | `"umd"` | `"systemjs"` | `"commonjs"` | `"cjs"` | `"auto"` | `false` 這些選項  
針對這些選項接下來將會逐一說明跟展示

## modules 設置差異

### modules: `false`

> 將 modules 設置成 `false` 意指  
> 如果看到 ESM 請 `不要` 幫忙轉譯模組解析方式  
> 按照 `原樣` 輸出
> 如果非看到 ESM 在此設置下會 `原樣` 輸出
>
> #### BEFORE
>
> ```js showLineNumbers
> import { uniq } from 'lodash-es';
>
> console.log(uniq([1, 2, 3, 3]));
> ```
>
> #### AFTER
>
> ```js showLineNumbers
> import { uniq } from 'lodash-es';
> console.log(uniq([1, 2, 3, 3]));
> ```

### modules: `"amd"`

> 將 modules 設置成 `"amd"` 意指  
> 如果看到 ESM 請幫忙轉譯模組解析方式為 `"amd"`  
> 如果非看到 ESM 將會在外層包裹一層 封裝成 `"amd"` 模組
>
> #### BEFORE
>
> ```js showLineNumbers
> import { uniq } from 'lodash-es';
>
> console.log(uniq([1, 2, 3, 3]));
> ```
>
> #### AFTER
>
> ```js showLineNumbers
> define(['lodash-es'], function (_lodashEs) {
>     'use strict';
>
>     console.log((0, _lodashEs.uniq)([1, 2, 3, 3]));
> });
> ```

### modules: `"umd"`

> 將 modules 設置成 `"umd"` 意指  
> 如果看到 ESM 請幫忙轉譯模組解析方式為 `"umd"`  
> 如果非看到 ESM 將會在外層包裹一層 封裝成 `"umd"` 模組
>
> #### BEFORE
>
> ```js showLineNumbers
> import { uniq } from 'lodash-es';
>
> console.log(uniq([1, 2, 3, 3]));
> ```
>
> #### AFTER
>
> ```js showLineNumbers
> (function (global, factory) {
>     if (typeof define === 'function' && define.amd) {
>         define(['lodash-es'], factory);
>     } else if (typeof exports !== 'undefined') {
>         factory(require('lodash-es'));
>     } else {
>         var mod = {
>             exports: {},
>         };
>         factory(global.lodashEs);
>         global.repl = mod.exports;
>     }
> })(
>     typeof globalThis !== 'undefined'
>         ? globalThis
>         : typeof self !== 'undefined'
>         ? self
>         : this,
>     function (_lodashEs) {
>         'use strict';
>
>         console.log((0, _lodashEs.uniq)([1, 2, 3, 3]));
>     }
> );
> ```

### modules: `"systemjs"`

> 將 modules 設置成 `"systemjs"` 意指  
> 如果看到 ESM 請幫忙轉譯模組解析方式為 `"systemjs"`  
> 如果非看到 ESM 將會在外層包裹一層 封裝成 `"systemjs"` 模組
>
> #### BEFORE
>
> ```js showLineNumbers
> import { uniq } from 'lodash-es';
>
> console.log(uniq([1, 2, 3, 3]));
> ```
>
> #### AFTER
>
> ```js showLineNumbers
> System.register(['lodash-es'], function (_export, _context) {
>     'use strict';
>
>     var uniq;
>     return {
>         setters: [
>             function (_lodashEs) {
>                 uniq = _lodashEs.uniq;
>             },
>         ],
>         execute: function () {
>             console.log(uniq([1, 2, 3, 3]));
>         },
>     };
> });
> ```

### modules: `"commonjs"` | `"cjs"`

> `"cjs"` 只是 `"commonjs"` 的縮寫  
> 將 modules 設置成 `"commonjs"` 或是 `"cjs"` 意指  
> 如果看到 ESM 請幫忙轉譯模組解析方式為 `"commonjs"`  
> 如果非看到 ESM 在此設置下會 `原樣` 輸出
>
> #### BEFORE
>
> ```js showLineNumbers
> import { uniq } from 'lodash-es';
>
> console.log(uniq([1, 2, 3, 3]));
> ```
>
> #### AFTER
>
> ```js showLineNumbers
> 'use strict';
>
> var _lodashEs = require('lodash-es');
> console.log((0, _lodashEs.uniq)([1, 2, 3, 3]));
> ```

### modules: `"auto"`

> modules `"auto"` 狀況比較特殊  
> 它同時也是 `@babel/preset-env` modules 選項的預設值  
> 它將會依照當初 call @babel/core 的 caller 決定如何轉譯目前的模組  
> 如果 caller 當中 supportsStaticESM 是 `true` 則與 modules: `false` 等價  
> 如果 caller 當中 supportsStaticESM 是 `false` 則與 modules: `"commonjs"` | `"cjs"` 等價  
> 如果使用的是 [`webpack >= 2`](https://github.com/babel/babel-loader/blob/c9d65eb97abc99790478e4c23fa6165d8b685d0c/src/injectCaller.js#L15C9-L17C37) 的情況 supportsStaticESM 將會是 true  
> 也就是大部分我們的使用情況皆會是 modules: `"auto"` | modules: `false`  
> 可以參閱 [babel/webpack编译构建过程中模块类型的转换过程](https://zhuanlan.zhihu.com/p/436312451) 與 [babel#8485](https://github.com/babel/babel/pull/8485/files#r236086742)

## Tree Shaking 如何運作

### Tree Shaking 運作時機點

Tree Shaking 會於 webpack 在最終在 optimization 時依照 **辨識標記** 將沒有用到的可能依賴移除

### 辨識標記

主要我們關注的標記是以下兩項

#### `/* harmony export */`

#### `/* unused harmony export */`

:::info

Harmony Modules aka ES Modules

Harmony Module 和 ES Module 都是指 ECMAScript Module 系統的不同名稱  
Harmony Module 最初是 ECMAScript 標準中關於 Module 系統的提案的一部分  
後來被納入了 ECMAScript 2015（ES6）標準中，並以 ES Module 的名稱正式成為標準的一部分

因此 Harmony Module 和 ES Module 兩者都指的是相同的東西，即 ECMAScript 中的 Module 系統

:::

### Tree Shaking 實驗

:::tip

可以先 clone 此 [[Repo] guychienll/tree-shaking-lab](https://github.com/guychienll/tree-shaking-lab) 開始實驗

:::

由於 webpack 會於 `production` mode 自動 optimization  
避免過多的設置導致失焦，這裡會使用 `dev` mode 去做實驗，並使用 `production` mode 驗證。

> #### 實驗需要的依賴
>
> 下述 highlight 部分為此次實驗必要依賴
>
> ```js {15,16,20,21} showLineNumbers
> {
>     "name": "tree-shaking-lab",
>     "version": "1.0.0",
>     "sideEffects": false,
>     "description": "",
>     "main": "index.js",
>     "scripts": {
>         "test": "echo \"Error: no test specified\" && exit 1",
>         "build:prod": "NODE_ENV=production webpack --color",
>         "build:dev": "NODE_ENV=development webpack --color"
>     },
>     "author": "",
>     "license": "ISC",
>     "devDependencies": {
>         "@babel/preset-env": "^7.23.2",
>         "babel-loader": "^9.1.3",
>         "eslint": "^8.53.0",
>         "eslint-plugin-prettier": "^5.0.1",
>         "prettier": "^3.0.3",
>         "webpack": "^5.89.0",
>         "webpack-cli": "^5.1.4"
>     }
> }
> ```

> #### Webpack Config 設置
>
> 需要注意的部分是我們將會使用 `development` mode 去實驗  
> 所以需要手動將 `usedExports` 設置為 `true`  
> 而之所以要將 `devtool` 設置為 `false` 只是便於觀測  
> 不會因為要產出 `SourceMap` 而被 inline 難以觀測
>
> ```js {30,32} showLineNumbers
> const path = require('path');
>
> module.exports = {
>     entry: './src/index.js',
>     output: {
>         filename: 'main.js',
>         path: path.resolve(__dirname, 'dist'),
>     },
>     module: {
>         rules: [
>             {
>                 test: /\.(?:js)$/,
>                 exclude: /node_modules/,
>                 use: {
>                     loader: 'babel-loader',
>                     options: {
>                         presets: [
>                             [
>                                 '@babel/preset-env',
>                                 {
>                                     modules: 'auto',
>                                 },
>                             ],
>                         ],
>                     },
>                 },
>             },
>         ],
>     },
>     devtool: false,
>     optimization: {
>         usedExports: true,
>     },
> };
> ```

## 參考連結

-   [[知乎] babel/webpack编译构建过程中模块类型的转换过程](https://zhuanlan.zhihu.com/p/436312451)<br/>
-   [[Github] babel#8485](https://github.com/babel/babel/pull/8485/files#r236086742)<br/>
-   [[騰訊雲] 从Tree Shaking来走进Babel插件开发者的世界](https://cloud.tencent.com/developer/article/1901089)<br/>
-   [[segmentfault] Tree Shaking原理 -【webpack进阶系列】](https://segmentfault.com/a/1190000022194321)<br/>
-   [[epic-react] Importing React Through the Ages](https://epicreact.dev/importing-react-through-the-ages/)
-   [[webpack] optimization.usedExports](https://webpack.js.org/configuration/optimization/#optimizationusedexports)
-   [[知乎] Webpack4.0各个击破（5）module篇](https://zhuanlan.zhihu.com/p/340360680)