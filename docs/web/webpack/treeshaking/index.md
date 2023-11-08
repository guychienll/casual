---
title: Tree Shaking
---

import Zoom from 'react-medium-image-zoom';
import ReactEmbedGist from 'react-embed-gist';
import "./index.scss";

# Tree Shaking

<Zoom>

![tree-shaking](../../assets/tree-shaking.gif)

</Zoom>

## 前情提要

:::caution
全文適用於 webpack bundler 並且透過 babel 做 trasnpile 的專案。
:::

:::tip
在了解 Tree Shaking 前必須要先了解一些背景知識

1. `@babel/preset-env` 當中 `modules` 參數給予不同值的差異
2. 達成 Tree Shaking 的必備條件
3. 如何正確的撰寫 ESM 輕鬆 Tree Shaking
   :::

## 什麼是 Tree Shaking ?

:::info
擷取自 Webpack 官方文件  
Tree shaking is a term commonly used in the JavaScript context for dead-code elimination
:::

> 換句話說，就是將你沒有用到的程式碼，在打包程式碼時，將他移除掉。

## `@babel/preset-env` 是什麼？

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

意指透過設定 modules 選項可以將 ESM 語法轉換成其他的模組解析方式，  
其中可以將其設定為 `"amd"` | `"umd"` | `"systemjs"` | `"commonjs"` | `"cjs"` | `"auto"` | `false` 這些選項  
針對這些選項接下來將會逐一說明跟展示
:::

> modules : `false`
> 將 modules 設置成 `false` 意指
> 如果看到 ESM 請`不要`幫忙轉譯模組解析方式
> | BEFORE | AFTER |
> | ---------------------- | ------------------------ |
> | <ReactEmbedGist wrapperClass="gist" gist="guychienll/03587263a8a53e4316c888249e1bf9a6" /> | <ReactEmbedGist wrapperClass="gist"  gist="guychienll/0fd361982165f3824127a5a6a0a1f058" /> |

> modules : `amd`
> 將 modules 設置成 `amd` 意指
> 如果看到 ESM 請幫忙轉譯模組解析方式為 `amd`
> | BEFORE | AFTER |
> | ---------------------- | ------------------------ |
> | <ReactEmbedGist wrapperClass="gist" gist="guychienll/9a87f43f9a7884a4d1a11a362dafa78c" /> | <ReactEmbedGist wrapperClass="gist"  gist="guychienll/b949718c56b0a54fc3bc3e588250966a" /> |

> modules : `umd`
> 將 modules 設置成 `umd` 意指
> 如果看到 ESM 請幫忙轉譯模組解析方式為 `umd`
> | BEFORE | AFTER |
> | ---------------------- | ------------------------ |
> | <ReactEmbedGist wrapperClass="gist" gist="guychienll/3ce32c4315abaca8e442a28c9a1caed0" /> | <ReactEmbedGist wrapperClass="gist"  gist="guychienll/88955a81a4fefcb9215a95da65c7d232" /> |

> modules : `systemjs`
> 將 modules 設置成 `systemjs` 意指
> 如果看到 ESM 請幫忙轉譯模組解析方式為 `sysemjs`
> | BEFORE | AFTER |
> | ---------------------- | ------------------------ |
> | <ReactEmbedGist wrapperClass="gist" gist="guychienll/6d5118c0c0b6522634856d0c1e826eaf" /> | <ReactEmbedGist wrapperClass="gist"  gist="guychienll/baf8a943816ebe8ff91b5f77088da2aa" /> |

> modules : `commonjs` `cjs`  
> `cjs` 只是 `commonjs` 的縮寫  
> 將 modules 設置成 `commonjs` 或是 `cjs` 意指  
> 如果看到 ESM 請幫忙轉譯模組解析方式為 `commonjs`
> | BEFORE | AFTER |
> | ---------------------- | ------------------------ |
> | <ReactEmbedGist wrapperClass="gist" gist="guychienll/74016ba26990db89867f8c779615becc" /> | <ReactEmbedGist wrapperClass="gist"  gist="guychienll/56f2268d7645fd36d128bc4f0d5f7b03" /> |

[babel-preset-env modules auto means](https://zhuanlan.zhihu.com/p/436312451)<br/>
[key-question of babel-preset-env modules auto means](https://github.com/babel/babel/pull/8485/files#r236086742)<br/>
[tree shaking reference](https://cloud.tencent.com/developer/article/1901089)<br/>
[tree shaking reference 2](https://segmentfault.com/a/1190000022194321)<br/>
