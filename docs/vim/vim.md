---
id: vim
title: vim 
description: 分享 vim 快速入門
image: /assets/vim.gif
created: '2023-04-20'
modified: '2023-11-20'
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
    ]
---

import Image from "@site/src/components/Image";

<Image src="/assets/vim/vim.png" alt="vim banner"></Image>

## History & Pronounced

-   Vi ( Visual ) -> Bill Joy
-   Vim /vim/ -> Bram Moolenaar

> Vim is pronounced as one word, like Jim, not vi-ai-em. It's written with a

    capital, since it's a name, again like Jim.

## Learning curve

<Image src="https://i.imgur.com/jVDzsME.png" alt="learning curve"></Image>

## Switch Between Modes

-   normal mode
    -   switch on
        -   `<ESC>` / `<C-c>` / `<C-[>` [suggested]
    -   switch off
        -   `i` / `o` / `a` / `s` / `c`
-   visual mode
    -   switch on
        -   `v` / `<C-v>`
    -   switch off
        -   `<ESC>` / `<C-c>` / `<C-[>` [suggested]
-   insert mode
    -   switch on
        -   `i` / `o` / `a` / `s` / `c`
    -   switch off
        -   `<ESC>` / `<C-c>` / `<C-[>` [suggested]
-   command mode
    -   switch on
        -   `:`
    -   switch off
        -   `<ESC>` / `<C-c>` / `<C-[>` [suggested]

### Edit Action

| key | name       | intention                    | using with text object | notes                        |
|-----|------------|:-----------------------------|:----------------------:|:-----------------------------|
| v   | visual     | select                       |           O            | `u` casing `~` toggle casing |
| y   | yank       | copy selection               |           O            |                              |
| d   | delete     | delete selection with scope  |           O            |                              |
| c   | change     | delete and insert with scope |           O            |                              |
| i   | insert     | insert chars before cursor   |           X            |                              |
| a   | append     | append chars after cursor    |           X            |                              |
| x   | delete     | delete selection             |           X            |                              |
| o   | open       | open a new line              |           X            |                              |
| s   | substitute | delete selection and insert  |           X            |                              |
| p   | paste      | paste the copy in clipboard  |           X            |                              |
| u   | undo       | undo action                  |           X            |                              |
| r   | replace    | replace a char               |           X            |                              |

### Navigation Action

| key | name   | intention                  | using with text object | notes                                               |
|-----|--------|:---------------------------|:----------------------:|:----------------------------------------------------|
| f   | find   | find char                  |           X            |                                                     |
| g   | go     | go to                      |           X            | `d` definition `gg` top `G` end `<C-o>` back cursor |
| b   | back   | back to word start         |           X            |                                                     |
| e   | end    | forward to word end        |           X            |                                                     |
| w   | word   | forward to next word start |           X            |                                                     |
| %   | pairs  | jump between pairs         |           X            |                                                     |
| /   | search | search a word with regex   |           X            | `<C-n>` next `<C-N>` previous                       |
| \{  | block  | search a word with regex   |           X            | `<C-n>` next `<C-N>` previous                       |

### Commands

-   stream editor (sed)
-   split
-   switch buffer `<C-w> direction` `<C-w>*2`

## Text Object ( Scope + Noun )

### Scope

| key | name   | intention    |
|-----|--------|:-------------|
| i   | inner  | inner scope  |
| a   | around | around scope |

### Noun

| key | name            |
|-----|:----------------|
| w   | word            |
| p   | paragraph       |
| b   | block           |
| i   | indentation     |
| \{  | curly brackets  |
| \[  | square brackets |
| \(  | round brackets  |
| '   | quotation mark  |
| `   | back tick       |

## Cheat Sheet

<Image src="https://external-preview.redd.it/YR2lVxHjzKwIIoRqFeusj3182IxUILqM2zjMSI0g654.png?auto=webp&s=f4202aed992ff7223a513e67047ca33b9f41bbc8" alt="vim cheat sheet"></Image>
