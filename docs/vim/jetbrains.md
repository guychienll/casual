---
id: vim-jetbrains
title: idea vim settings
description: 分享 idea vim shortcut 以及其生態系好用工具
image: /assets/vim.gif
created: '2024-04-08'
modified: '2024-04-08'
keywords:
  [
    vim,
    develop,
    plugin,
    configuration,
    settings,
    normal,
    visual,
    frontend,
    refactor,
    shortcut,
    webstorm
  ]
tags:
  [
    vim,
    develop,
    plugin,
    configuration,
    settings,
    normal,
    visual,
    frontend,
    refactor,
    shortcut,
    webstorm
  ]
---

```text
let mapleader=';'
plug 'easymotion/vim-easymotion'

set number
set clipboard+=unnamed
set hlsearch
set incsearch
set ignorecase
set smartcase
set showmode
set scrolloff=5
set surround
set easymotion


map rr :action refactorings.quicklistpopupaction<cr>
map rn :action renameelement<cr>
map ri :action inline<cr>
map rv :action introducevariable<cr>
map rp :action introduceparameter<cr>
map rm :action extractmethod<cr>
map rc :action changesignature<cr>
map zn :action gotonexterror<cr>
map zp :action gotopreviouserror<cr>
map ec :action reactextractcomponentaction<cr>
```