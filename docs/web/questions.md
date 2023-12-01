---
id: 100-questions
title: 前端 100 問
description: 前端 100 問
created: '2023-11-29'
modified: '2023-11-29'
draft: true
---

# 前端 100 問

> ## React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
>
> 在 React 列表當中加入 key 可以讓 React 在做 reconciliation 時  
> 分辨在同樣結構當中的 virtual dom 為不同的元素  
> 避免造成渲染上的錯誤，同時也避免多餘的渲染  
> 而有時候也會使用 key 做強制更新渲染

> ## ['1', '2', '3'].map(parseInt) what & why ?
>
> 先釐清 parseInt 介面  
> parseInt(toBeParsed: string; radix: number)  
> 也了解到 js map array 第一項參數  
> callback 當中會 pass 進 ( iterator , index , arr )  
> 因此預期回傳會是如下運算結果
> `[parseInt('1',0),parseInt('2',1),parseInt('3',2)]`  
> 所以答案會是 `[1,NaN,NaN]`  
> 因為第 2 與 3 的解皆無法正常被換算，就回傳 NaN

> ## 什么是防抖和节流？有什么区别？如何实现？
>
> ### 防抖 debounce
>
> 在使用者操作行為上，擔心使用者短期間內誤觸或是故意多次點擊，會在 UI 元件上加上防抖的機制，避免短時間內重新觸發同個事件  
> 因此在給予一事件與 n 時間段  
> 每次觸發 debounce 只要於 n 時間段內將會將前次註冊的事件取消，而真正出發時機為最後一次觸發後的 n 時間段後
>
> ```js showLineNumbers
> const debounce = (callback, delay, ...rest) => {
>     let timeoutId = null;
>     return (...rest) => {
>         clearTimeout(timeoutId);
>         timeoutId = setTimeout(() => {
>             callback();
>         }, delay);
>     };
> };
> ```
>
> ### 節流 throttle
>
> 在使用者操作行為上，擔心高頻率的操作會造成服務負擔，因次將高頻率的操作做稀釋  
> 因此給予一事件與 n 時間區段  
> 事件每 n / 10 發生一次持續發生 n 秒 （ 包含第 n 秒 ）  
> 則事件僅會發生 2，如果沒使用 throttle 則會發生 11 次
>
> ```js showLineNumbers
> const throttle = (callback, delay, ...rest) => {
>     let wait = false;
>
>     return (...rest) => {
>         wait && return;
>
>         callback(...rest);
>         wait = true;
>         setTimeout(()=>{
>             wait = false;
>         },delay);
>     };
> }>
> ```

> ## 介绍下 Set、Map、WeakSet 和 WeakMap 的区别

> ## 介绍下深度优先遍历和广度优先遍历，如何实现

> ## 请分别用深度优先思想和广度优先思想实现一个拷贝函数
