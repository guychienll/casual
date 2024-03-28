---
id: how-to-add-a-custom-lint-rule
title: 如何新增客製化 eslint 規則
description: 如何新增客製化 eslint 規則
created: '2024-03-28'
modified: '2024-03-28'
draft: true
---

# eslint rule

開立一個自己的 eslint plugin

:::caution ESlint \{ Plugin | Config \} 命名規範

-   eslint-plugin-`{{name}}`
-   @`{{scope}}`/eslint-plugin
-   @`{{scope}}`/eslint-plugin-`{{name}}`

> 假使今天 casual 公司要要為自己建立一套 eslint plugin 名稱命名為 casual
> repo root : ./ `<root>`

```bash
mkdir eslint-plugin-casual

cd ./eslint-plugin-casual

npm init -y

mkdir lib

touch ./lib/index.js
```

> ./eslint-plugin-casual/package.json

```json
{
    "name": "eslint-plugin-casual",
    "version": "1.0.0",
    "description": "",
    "main": "./lib/index.js", // 可以自由決定 lib entry
    "exports": "./lib/index.js", // 可以自由決定 lib entry (esm)
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

> ./eslint-plugin-casual/lib/index.js

```js
export default {
    rules: {},
};
```

> ./package.json

```json
{
    "name": "casual",
    "version": "0.1.0",
    "dependencies": {
        "...": "ignore"
    },
    "scripts": {
        "...": "ignore"
    },
    "devDependencies": {
        "eslint": "^8.42.0",
        "eslint-plugin-react": "^7.32.2",
        "eslint-plugin-casual": "file:eslint-plugin-casual"
    }
}
```

> 上述都完成後可以先行安裝一些套件在後續流程上會使用到

```bash
npm i --save-dev eslint-doc-generator mocha
```

1. 讓我們用 TDD 的方式開始撰寫 Rule

---

:::tip 在撰寫 Rule 之前，會需要先釐清，釐清後就可以開始撰寫

-   此 Rule 預期合法，不 Report 的測試案例有哪些
-   此 Rule 預期不合法，要 Report 的測試案例有哪些

> 在此為了更好描述，將以一個實際案例來舉例：
> 將以

:::

> 以下步驟將都會在 `<root>/eslint-plugin-casual`

```bash
mkdir ./lib/custom-rules

touch ./lib/custom-rules/
```
