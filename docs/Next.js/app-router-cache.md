---
id: next-js-app-router-cache
title: Next App Router - Caching 
tags:
  - next.js
  - React
  - App Router
  - Caching
---

| Mechanism           | What                       | Where  | Purpose                                         | Duration                        |
| ------------------- | -------------------------- | ------ | ----------------------------------------------- | ------------------------------- |
| request-memoization | Return values of functions | Server | Re-use data in a React Component tree           | Per-request lifecycle           |
| data-cache          | Data                       | Server | Store data across user requests and deployments | Persistent (can be revalidated) |
| full-route-cache    | HTML and RSC payload       | Server | Reduce rendering cost and improve performance   | Persistent (can be revalidated) |
| router-cache        | RSC Payload                | Client | Reduce server requests on navigation            | User session or time-based      |

![caching-overview.jpg](./assets/caching-overview.jpg)

## Request Memoization

- 是 react 針對 fetch api 做的擴充
- 是 react feature 不是 next.js 的 feature
- 此功能只做用在 GET method 上 且使用的需要是 fetch api
- 不適用於 route handlers 因為那部分不算 react component tree
- 基本上如果符合上述條件， react 會自動幫忙做 function 層級的 cache，但如果發現沒有被 cache 著，可以使用 `React.cache` 去達成 cache 的效果 ( 雖然文件說主動會做，但目前看起來沒有，可能是 React 版本不對 ）
- `React.cache` `React.use` 並尚未正式發佈 文件上還沒有
- 發生在 server side 並且區間只在當次 request 當中有作用，所以不用 revalidate

不用在 top-level 就去 request api 做好整理後往下 pass props，藉由 cache 機制也可以在各個 component 當中直接 request 相同的 endpoint，react 會協助 cache，performance 不會因此而受到影響。

```jsx showLineNumbers
import * as React from 'react';

const getUser = React.cache(async function () {
    console.log('start', new Date().toISOString());
    const resp = await fetch('https://dummyjson.com/users');
    console.log('end', new Date().toISOString());
    return resp.json();
});

const ServerComponent = async ({ children }: { children: React.ReactNode }) => {
    await getUser();
    console.log('first time end');
    await getUser();
    console.log('second time end');
    await getUser();
    console.log('third time end');
    return <div>{children}</div>;
};

export default ServerComponent;
```

## Data Cache

- next.js 針對 fetch 做擴充，可以針對 api 第二參數給予 `cache : string`  或 `next.revalidate : number` 屬性，調整 data cache 的行為
- 此處的 data cache 意指 server side 跟 data source 之間的 cache *並非* 平常聽到的 browser cache
- 如果沒有額外做 cache 或是 revalidate 的設定將會是永久 cache 的
- revalidate 如同 max-age 等相關設定一樣，在 cache 的設定當中通常都是以秒為基本單位
- revalidate 計算是由 MISS 後第一次 data cache server 回覆時間點開始計算
- 可以使用 revalidateTag 跟 revalidatePath 去清除 persistent 的 cache 將在下次起請求中要到新的資料


![data-cache.jpg](./assets//data-cache.jpg)

:::tip 小結語
- 兩者差異
    - 生命週期
    - Request Memoization 減少對 data cache server 跟 data source 的請求
    - Data Cache 減少對 data source 的請求
:::

    

## Full Route Cache

- 只針對 static route 做 full route cache 不針對 dynamic route 做 cache
    - dynamic 定義為 
    **Using a [Dynamic Function](https://nextjs.org/docs/app/building-your-application/caching#dynamic-functions)**: This will opt the route out from the Full Route Cache and dynamically render it at request time. The Data Cache can still be used.

- request an server component flow
    
    ### **[React Hydration and Reconciliation on the Client](https://nextjs.org/docs/app/building-your-application/caching#3-react-hydration-and-reconciliation-on-the-client)**
    
    At request time, on the client:
    
    1. The HTML is used to immediately show a fast non-interactive initial preview of the Client and Server Components.
    2. The React Server Components Payload is used to reconcile the Client and rendered Server Component trees, and update the DOM.
    3. The JavaScript instructions are used to [hydrate](https://react.dev/reference/react-dom/client/hydrateRoot) Client Components and make the application interactive.
    

![static-and-dynamic-routes.jpg](./assets//static-and-dynamic-routes.jpg)

## Router Cache

- 使用 `<Link/>` components handle route 時 next.js 會發現並且在 request 當下頁面時先行幫忙 prefetch 下一個頁面然後 cached in memory
- no full page reload 將會保留 React state and browser state
- **Session**: The cache persists across navigation. However, it's cleared on page refresh.
- **Automatic Invalidation Period**: The cache of an individual segment is automatically invalidated after a specific time. The duration depends on whether the route is [statically](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#static-rendering-default) or [dynamically](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering) rendered:
    - **Dynamically Rendered**: 30 seconds
    - **Statically Rendered**: 5 minutes
- By adding `prefetch={true}` or calling `router.prefetch` for a dynamically rendered route, you can opt into caching for 5 minutes.
- router cache 是沒有辦法省略的 ( It's not possible to opt out of the Router Cache. )

:::tip 小結語
- 兩者差異
    - 生命週期
    - Full Route Cache 只支援非 dynamic 的結果
    - Router Cache 支援 dynamic 結果
:::