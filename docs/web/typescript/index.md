---
id: index
title: Hello, TypeScript
description: TypeScript 簡介、基礎特性講解、環境建置
image: /assets/web/typescript/01.gif
keywords: [TypeScript, Node, Npm, JavaScript]
tags: [TypeScript, Node, Npm, JavaScript]
---

import Image from '@site/src/components/Image';

<Image src="/assets/web/typescript/01.gif" alt="typescript banner" />

## 前置需求

:::info 安裝 node 及 npm 讓後續能進行套件 ( package ) 安裝

如果尚未有 [node](https://nodejs.org/en/download) 環境請先至此安裝  
安裝後同時也會安裝好 npm 無需額外安裝

:::

```shell showLineNumbers title="terminal"
# 請先確保已經安裝完 node 跟 npm
# 可以用版本檢查確定自己有無安裝好

# node 版本
node --version

# npm 版本
npm --version
```

安裝完 node 跟 npm 後即可以安裝 TypeScript

> 選擇 1 - 安裝於局部 `推薦`
>
> ```shell showLineNumbers title="terminal"
> #  如果不想全局安裝可以開啟個資料夾
>
> mkdir typescript-playground
>
> cd typescript-playground
>
> # -y 是都回答 yes 的意思
> npm init -y
>
> # 可以替換為 npm i typescript
> npm install typescript
> ```

> 選擇 2 - 安裝於全域
>
> ```shell showLineNumbers title="terminal"
> # ( alternative ) 全局安裝 typescript
> npm install -g typescript
> ```

:::caution

如果是選擇安裝於局部的選項  
後續所以操作行為皆在 typescript-playground 操作

:::

## Hello, TypeScript

```shell showLineNumbers title="terminal"
# 建立一檔案名稱為 hello.ts 的 typescript 檔案
touch hello.ts
```

```typescript showLineNumbers title="./hello.ts"
const language: string = 'TypeScript';

console.log(`Hello, ${language}`);
```

```shell showLineNumbers title="terminal"
# 局部執行
./node_modules/.bin/tsc ./hello.ts

node ./hello.js

# 全局執行
tsc ./hello.ts

node ./hello.js
```

:::info

tsc - TypeScript Compiler

> [Remember: Type annotations never change the runtime behavior of your program.](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

tsc 僅會幫忙將 typescript 檔案進行編譯 ( compile )  
實際上的編譯行為僅是將 `type annotations` 去除  
而 `type annotations` 不會影響任何 runtime 行為

就如同上述所說，tsc 只會做編譯  
因此執行完 tsc 後會產生出一份編譯過後的 javascript 檔案  
這時就可以使用 node 去執行該份 javascript 檔案  
此時在 terminal 將會如預期印出 `Hello, TypeScript`  
:::

<Image src="/assets/web/typescript/02.gif" alt="hello typescript" />
