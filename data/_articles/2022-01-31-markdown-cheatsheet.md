---
title: Markdown cheatsheet
draft: true
date: 2022-01-31T08:08:50.675Z
tags:
  - Markdown
summary: >
  'Markdown cheatsheet for all your blogging needs - headers, lists, images,
  tables and more! An illustrated guide based on GitHub Flavored Markdown.'
---

# Introduction

The following markdown cheatsheet is adapted from: https://guides.github.com/features/mastering-markdown/

# What is Markdown?

Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like `#` or `*`.

# Syntax guide

Here’s an overview of Markdown syntax that you can use anywhere on GitHub.com or in your own text files.

## Headers

```
# This is a h1 tag

## This is a h2 tag

#### This is a h4 tag
```

# This is a h1 tag

## This is a h2 tag

#### This is a h4 tag

## Emphasis

```
_This text will be italic_

**This text will be bold**

_You **can** combine them_
```

_This text will be italic_

**This text will be bold**

_You **can** combine them_

## Lists

### Unordered

```
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

### Ordered

```
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

## Images

```
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
Format: ![Alt Text](url)
```

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

[![Enter Now](https://pfrac.co.uk/static/images/enter-now-button.png)](https://racebest.com/races/qqwsu)

## Links

```
http://github.com - automatic!
[GitHub](http://github.com)
```

http://github.com - automatic!
[GitHub](http://github.com)

## Blockquotes

```
As Kanye West said:

> We're living the future so
> the present is our past.
```

As Kanye West said:

> We're living the future so
> the present is our past.

## Footnotes

```
Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.
```

Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.

## Task Lists

```
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

## Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```
| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |
```

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

## Strikethrough

Any word wrapped with two tildes (like `~~this~~`) will appear ~~crossed out~~.
