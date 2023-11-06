---
title: webpack-tree-shaking
---

import Zoom from 'react-medium-image-zoom';

# 搖樹 Tree Shaking

<Zoom>

![tree-shaking](../assets/tree-shaking.gif)

</Zoom>

## 什麼是搖樹？ What is Tree Shaking ?

:::info 擷取自 Webpack 官方文件
Tree shaking is a term commonly used in the JavaScript context for dead-code elimination
:::

> 換句話說，就是將你沒有用到的程式碼，在打包程式碼時，將他移除掉。

## 如何搖樹？ How to Tree Shaking ?

如果在 webpack 當中使用 babel-loader 請先確認<br/>
`@babel/preset-env` 當中 `modules` 的設定值為 `'auto'` `false` 或是 `不設置`<br/>
因為 `modules` 欄位的預設值 就是 `auto` [@babel/preset-env](https://babeljs.io/docs/babel-preset-env#modules)<br/>
是上述這些選項才有機會做到 tree shaking，
原因是因為 tree shaking 是依賴於靜態分析的功能
所以如果在打包過程當中並不是採取靜態分析的模組解析 (module resolution) 那將會無法做 tree shaking。
而要是 `auto` 將會自動判斷呼叫端 (caller) 是採取什麼樣的模組解析方式，而使用，
如果是 false 也就是預期所有的 module 將會以原先的 ESM 寫法輸出

```javascript showLineNumbers
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "modules": "false"
            }
        ]
    ]
}
```

[babel-preset-env modules auto means](https://zhuanlan.zhihu.com/p/436312451)<br/>
[key-question of babel-preset-env modules auto means](https://github.com/babel/babel/pull/8485/files#r236086742)<br/>
[tree shaking reference](https://cloud.tencent.com/developer/article/1901089)
