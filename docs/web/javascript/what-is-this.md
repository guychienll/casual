---
id: what-is-this
title: 'What is this'
description: What is this in JavaScript ?
image: /assets/web/javascript/javascript.png
keywords: [Node, Npm, JavaScript, This]
tags: [Node, Npm, JavaScript, This]
---

import Image from '@site/src/components/Image';

<Image src="/assets/web/javascript/javascript.png" alt="javascript banner" />

## 在不同環境下的 this

### 瀏覽器環境

在瀏覽器環境下，this 通常指向 window 物件。

> ```js showLineNumbers
> console.log(this === window);
> ```
>
> ```text title="output"
> true
> ```

### Node.js 環境

在 Node.js 環境下，this 通常指向 global 物件。

> ```js showLineNumbers
> console.log(this === global);
> ```
>
> ```text title="output"
> true
> ```

### 嚴格模式

在嚴格模式下，this 會是 undefined。

> ```js showLineNumbers
> 'use strict';
> console.log(this === undefined);
> ```
>
> ```text title="output"
> true
> ```

### 非嚴格模式中的 this

#### 使用 `function keyword` 定義函式

使用 `function keyword` 定義函式  
this 會依照呼叫的方式不同而有相異結果

this 會指向呼叫該函式的物件  
如果沒有指定物件，則會指向全域物件

因為此處 greeting 函式是直接被呼叫，因此 this 會指向全域物件

> ```js showLineNumbers  output="Hello, I'm window"
> window.name = 'window';
>
> function greeting() {
>     console.log(`Hello, I'm ${this.name}`);
> }
>
> greeting();
> ```
>
> ```text title="output"
> Hello, I'm window
> ```

對比上段程式碼，此處 greeting 函式是被 guy 物件呼叫  
因此 this 會指向 guy 物件

> ```js showLineNumbers
> window.name = 'window';
>
> function greeting() {
>     console.log(`Hello, I'm ${this.name}`);
> }
>
> var guy = {
>     name: 'guy',
>     say: greeting,
> };
>
> guy.say();
> ```
>
> ```text title="output"
> Hello, I'm guy
> ```

#### 使用 `arrow function` 定義函式

使用 `arrow function` 定義函式
arrow function 的 this 將會在宣告當下被綁定
而 this 會是宣告當下向外層 scope 尋找 this 的值
如果沒有找到，則會指向全域物件

此處 greeting 在宣告當下，向外層尋找 this 的值是 window 物件

> ```js showLineNumbers
> window.name = 'window';
>
> var greeting = () => {
>     console.log(`Hello, I'm ${this.name}`);
> };
>
> greeting();
> ```
>
> ```text title="output"
> Hello, I'm window
> ```

對比上段程式碼，此處 greeting 在宣告當下，向外層尋找 this 的值是 guy 物件

> ```js showLineNumbers
> window.name = 'window';
>
> var guy = {
>     name: 'guy',
>     say: function () {
>         (() => {
>             console.log(`Hello, I'm ${this.name}`);
>         })();
>     },
> };
>
> guy.say();
> ```
>
> ```text title="output"
> Hello, I'm guy
> ```

以此段程式碼證實，arrow function 的 this 會在宣告當下被綁定  
在 3 ~ 5 行，greeting function 被宣告 此時的 this 會指向 window 物件  
因為外層並沒有除了全域以外的 scope  
即使最後在第 10 行， greeting function 是於 guy 物件中被呼叫

> ```js showLineNumbers
> window.name = 'window';
>
> var greeting = () => {
>     console.log(`Hello, I'm ${this.name}`);
> };
>
> var guy = {
>     name: 'guy',
>     say: function () {
>         greeting();
>     },
> };
>
> guy.say();
> ```
>
> ```text title="output"
> Hello, I'm window
> ```
