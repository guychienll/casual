---
id: vim-vscode
title: vscode vim settings
description: 分享 vscode vim shortcut 以及其生態系好用工具
image: /assets/vim.gif
created: '2023-04-20'
modified: '2023-11-20'
keywords:
    [
        vim,
        develop,
        vscode,
        plugin,
        configuration,
        settings,
        normal,
        visual,
        frontend,
        refactor,
        shortcut,
    ]
tags:
    [
        vim,
        develop,
        vscode,
        plugin,
        configuration,
        settings,
        normal,
        visual,
        frontend,
        refactor,
        shortcut,
    ]
---

import Image from "@site/src/components/Image";

<Image src="/assets/vim/vscode/vscode.png" alt="vim banner"></Image>

## Preparation

| Name                                                                                                                             | Role           | Note                          |
|:---------------------------------------------------------------------------------------------------------------------------------|----------------|:------------------------------|
| [vscode](https://code.visualstudio.com/)                                                                                         | editor         | required                      |
| [vscodevim.vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)                                               | vscode plugin  | required                      |
| [extr0py.vscode-relative-line-numbers](https://marketplace.visualstudio.com/items?itemName=extr0py.vscode-relative-line-numbers) | vscode plugin  | optional                      |
| [sburg.vscode-javascirpt-booster](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster)           | vscode plugin  | optional [suggested:frontend] |
| [p42ai.refactor](https://marketplace.visualstudio.com/items?itemName=p42ai.refactor&ssr=false#overview)                          | vscode plugin  | optional [suggested:frontend] |
| [wix.glean](https://marketplace.visualstudio.com/items?itemName=wix.glean)                                                       | vscode plugin  | optional [suggested:frontend] |
| [vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)                                      | browser plugin | optional [suggested:all]      |
| [hackmd](https://hackmd.io)                                                                                                      | online notes   | optional [suggested:all]      |

## Suggested VSCode Vim Configuration

```json
{
    "vim.useSystemClipboard": true,
    "vim.surround": true,
    "vim.foldfix": true,
    "vim.easymotion": true,
    "vim.leader": ";",
    "vim.easymotionMarkerBackgroundColor": "#FBD87F",
    "vim.easymotionMarkerFontWeight": "bold",
    "vim.easymotionMarkerForegroundColorOneChar": "#DE0079",
    "vim.easymotionKeys": "hklyuiopnmqwertzxcvbasdgjf",
    "vim.searchHighlightColor": "#DE0079",
    "vim.searchHighlightTextColor": "#fefefe",
    "vim.hlsearch": true,
    "extensions.experimental.affinity": {
        "vscodevim.vim": 1
    }
}
```

### Suggested VSCode Vim Navigation Configuration

```json
{
    "vim.normalModeKeyBindingsNonRecursive": [
        {
            "before": ["z", "n"],
            "commands": ["editor.action.marker.next"]
        },
        {
            "before": ["z", "p"],
            "commands": ["editor.action.marker.prev"]
        }
    ]
}
```

### Suggested VSCode Vim Refactor Configuration ( p42 refactor tool installed )

```json
{
    "vim.normalModeKeyBindingsNonRecursive": [
        {
            "before": ["R", "R"],
            "commands": ["p42.touchBar.refactor"]
        }
    ],
    "vim.visualModeKeyBindingsNonRecursive": [
        {
            "before": ["R", "R"],
            "commands": ["p42.touchBar.refactor"]
        }
    ]
}
```