---
title: Notes for Javascript-the Definitive Guide
---
An ordinary JavaScript object is an unordered collection of named values.
Special kinds of object: array, function, class.
Other kinds of object: RegExp, typed array, set, map, Date, Error.

Functions and classes are not just part of the language syntax: they are themselves values that can be manipulated by JavaScript programs.

Automatic GC.

Technically, it is only objects that have methods. But numbers, strings, boolean, and symbol values behave as if they have methods. In JavaScript, `null` and `undefined` are the only values that methods cannot be invoked on.

JavaScript liberally converts values from one type to another.
ES2016 add `**` for exponentiation. 

`Math` object, negative zero, `Infinity`, `NaN`

comparison table

binary floating-point, rounding errors

BigInt

JavaScript do not allow mixed operands to the arithmetic operators.

string is 16-bit values, js uses utf-16 encoding. most string-manipulation methods defined by JS operate on 16-bit values, not characters. However, in ES6, strings are iterables, actual characters are iterated.

single quotes, double quotes, backticks (interpolatation), new line, escape.

JS code may contain strings of HTML code, and HTML code may contain strings of JS code.

template literals, tagged template literals