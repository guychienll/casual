---
title: tree-shaking
---

import Zoom from 'react-medium-image-zoom';

# Tree Shaking

<Zoom>

![tree-shaking](../../assets/tree-shaking.gif)

</Zoom>

## 前情提要

:::warning
全文適用於 webpack bundler 並且透過 babel 做 trasnpile 的專案。
:::

:::info 
在了解 Tree Shaking 前必須要先了解一些背景知識  
1. `@babel/preset-env` 當中 `modules` 參數給予不同值的差異  
2. 達成 Tree Shaking 的必備條件
3. 如何正確的撰寫 ESM 輕鬆 Tree Shaking
:::

## 什麼是 Tree Shaking ?

:::info 擷取自 Webpack 官方文件
Tree shaking is a term commonly used in the JavaScript context for dead-code elimination
:::

> 換句話說，就是將你沒有用到的程式碼，在打包程式碼時，將他移除掉。

## `@babel/preset-env` 是什麼？

> 



[babel-preset-env modules auto means](https://zhuanlan.zhihu.com/p/436312451)<br/>
[key-question of babel-preset-env modules auto means](https://github.com/babel/babel/pull/8485/files#r236086742)<br/>
[tree shaking reference](https://cloud.tencent.com/developer/article/1901089)<br/>
[tree shaking reference 2](https://segmentfault.com/a/1190000022194321)<br/>
