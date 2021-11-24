---
title: Misc
---
1. [jquery](http://api.jquery.com)
[w3 tutorial](http://www.w3schools.com/jquery/default.asp)
2. [underscore](http://underscorejs.org/)

In fact, there is no "constructor" function, there is only "constructive call".

Inheritance is essentially copying. 

In javascript, there are mainly 7 types:
* number
* boolean
* string
* null
* undefined
* symbol
* object

copy value vs. copy reference:
For `object` (including `function`, `array`), assignments pass reference; for others (scalar types), assignments pass values.

variable vs. value
javacript中变量没有类型，只有值才有类型。
给变量赋值只会改变该变量的指向，不会改变原指向的值。
undefined vs. undeclared (Reference Error) `typeof <undeclared>`有安全保护

```js
if (typeof DEBUG != 'undefined'){
//...
}

```
`string` type is inmutable.
`undefined` 指从未赋值
`null` 指曾赋过值，但是当前值为空  `null`是关键字，不能作为identifier, 而`undefined`可以

`NaN` 是`number`类型, 唯一非自反的值 （`NaN !=NaN`)