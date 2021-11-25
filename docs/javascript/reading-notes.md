---
title: Reading Notes
---
Notes taken when reading books, wepages, etc.
## Javascript: The Definitive Guide
[link](./js-TDG.md)

## Javascript 设计模式与开发实践
人类可以走到生物链顶端的前两个原因分别是会“使用名字” 和“使用工具”
分辨模式的关键是意图而不是结构

## Javascript 高级编程
ECMAScript与javascript基本上指的同一个东西，但javascript的完整实现应该由下列三个部分组成：
* ECMAScript
* DOM
* BOM

ECMAScript 本身与浏览器没有依赖关系, 语言本身并不包含输入输出定义（C/C++也是)。宿主环境除了常见的Web浏览器，还包括Node和Adobe Flash.

### BOM
核心是window对象，location，navigator, screen, history

### DOM
Node
DOCUMENT, ELEMENT
HTMLDocument, HTMLElement

标准DOM API
HTML5 扩展DOM API

## Javascript DOM 编程艺术（第2版）
设计原则：
* 平衡退化：确保网页在没有javascript的情况下也能正常工作(例如：搜索引擎）
* 渐进增强: 从最核心的内容（html标记)开始, 逐步通过css和DOM来增强
* 以用户为中心

DOM vs. BOM, document vs. window

DOM有三种节点(node)
* element (nodeType 为 1）
* attribute （nodeType 为 2)
* text (nodeType 为 3)

其中 text, attribute node只能存在于某个Element node中。

注意区分：document, DOM Element, DOM Node. 在javascript中每个DOM节点都是一个Object, `document`本身不是节点。
`document`提供以下方法：`getElementById, getElementsByTagName, getElementsByClassName, createElement, createAttribute, createTextNode`
Element node提供以下方法：`getElementsByTagName, getElementsByClassName, getAttribute, setAttribute`

`<head>`中的`<script>`标签引入的js代码会先于body加载，会出现DOM未就绪就引用DOM的问题。置于`</body>`之前也不能保证script 与 DOM哪个先加载完。可以使用`onload`来解决。

HTML-DOM vs. DOM-Core

DOM中访问style属性时会将带`-`的属性名变成驼峰命名，例如 css 属性 `font-family` 在DOM中需要用 fontFamily来访问. DOM中只能提取内嵌在元素上的style属性，不能提取css文件中的style. 