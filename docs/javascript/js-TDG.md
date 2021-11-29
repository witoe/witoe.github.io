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

any JS value can be converted to a boolean value. `undefined`, `null`, `0`, `-0`, `NaN`, `""` convert to false, all other values convert to true.

`undefined` is a predefined global constant, it represents a deeper kind of absence than `null`, it can be:
* the value of variables that have not been initialized
* the value you get when you query the value of an object property or array element that does not exist
* the return value of functions that do not explicitly return a value
* the value of function parameters for which no argument is passed

Despite these differences, `null` and `undefined` both indicate an absence of value and can often be used interchangeably. The euqality operator `==` considers them to be equal.

When ES6 introduced the `for/of` loop and iterable objects, it needed to define standard methods that classes could implement to make themselves iterable. But standarding any particular string name for this iterator method would have broken existing code, so a symbolic name was used instead.

The global object, window, self, globalThis

Primitives are compared by value.
Objects are not compared by value, they are compared by *reference*: two object values are the same if and only if they refer to the same underlying object.
> Here 'compare' means `===`

| Value | to String | to Number | to Boolean |
|-----  |------     | ------    | ----- |
|undefined| "undefined"| NaN   |   false|
| null  |    "null" |  0       |  false |
| true  |  "true"   |  1        |        |
| false |   "false" |   0       |        |
| ""    |           |    0       | false |
| "1.2" |           |    1.2     | true  |
|  "one"|           |    NaN     | true  |
|  0    |    "0"    |            | false |
|  -0    |    "0"    |            | false |
|  1    |    "1"    |            | true |
|  Infinity| "Infinity"|            | true |
|  -Infinity| "-Infinity"|            | true |
|  NaN    |    "NaN"    |            | false |
|  Infinity| "Infinity"|            | true |
|  {}(any object)}| * |      *      | true |
|  []   |   ""  |  0              | true  |
| [9] (one numeric element) | "9"| 9| true|
| {'a'} (any other array)| use join method | NaN | true |
function(){} (any function) | *  | NaN | true |

Convertibility of one value to another does not imply equality (==) of those two values.

Explicit conversion: Boolean(), Number(), String() functions. If they are used with `new`, i.e. as constructor, you'l get a "wrapper" object (falsy) that behaves just like a primitive boolean, number or string value. There wrapper objects are a historical leftover from the earilies days of JS, and there is never really any good reason to use them.

Certain operators perform implicit type conversions:
```js
x + ""  // String(x)
+x   //  Number(x)
x-0  // Number(x)
!!x  // Boolean(x)
```

toString([base]), parseInt, parseFloat
toString(), valueOf()

```js
for (const datum of data) console.log(datum);
```
const during one loop

variables and constants declared as part of a `for, for/in, for/of` loop have the loop body as their scope, even though they technically appear outside of the curly braces.

In Node and in client-side JS modules, the scope of a global variable is the file that it is defined in. In traditional client-side JS, however, the scope of a blobal variable is the HTML docuement in which it is defined.

deconstructring assignment, three dots

# Expressions and Operators
An expression is a phrase of JavaScript that can be evaluated to produce a value.

Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references.

When any identifier appears by itself in a program, JavaScript assumes it is a variable or constant or property of the global object and looks up its value.

## Array and object initializers

## Function definition expressions (function expression vs. function statement)

Property access expression
With either type of property access expression, the expression before the . or [ is first
evaluated. If the value is null or undefined, the expression throws a TypeError, since
these are the two JavaScript values that cannot have properties. If the object expression
is followed by a dot and an identifier, the value of the property named by that
identifier is looked up and becomes the overall value of the expression. If the object
expression is followed by another expression in square brackets, that second expression
is evaluated and converted to a string. The overall value of the expression is then
the value of the property named by that string. In either case, if the named property
does not exist, then the value of the property access expression is undefined.

In JavaScript, the values null and undefined are the only two values that do not have
properties.
```js
expression?.identifier
expression?.[expression]
```
let a = { b: null };
a.b?.c.d // => undefined  (short-curciting)
```

## Function invocation expressions
Note, however, that ?.() only checks whether the lefthand side is null or undefined.
It does not verify that the value is actually a function.
```js
let f = null, x = 0;
try {
f(x++); // Throws TypeError because f is null
} catch(e) {
x // => 1: x gets incremented before the exception is thrown
}
f?.(x++) // => undefined: f is null, but no exception thrown
x // => 1: increment is skipped because of short-circuiting
```

## Object creation expressions

## Operators
In JavaScript, variables, properties of objects, and elements of arrays are lvalues.

JavaScript always evaluates expressions in strictly left-toright order.

An object is equal to itself, but not to any other object.

## Assignment expressions
The value of an assignment expression is the value of the right-side
operand.

The two cases will differ only if a includes side effects such as a function call or an
increment operator.

## Other operators
delete expects its operand to be an lvalue. If it is not an lvalue, the operator takes no
action and returns true. Otherwise, delete attempts to delete the specified lvalue.
delete returns true if it successfully deletes the specified lvalue.

The comma operator is a binary operator whose operands may be of any type. It evaluates
its left operand, evaluates its right operand, and then returns the value of the
right operand.

# Statements
When a switch executes, it computes the value of expression
and then looks for a case label whose expression evaluates to the same value (where
sameness is determined by the === operator).

The fact that the case expressions are evaluated at runtime makes the JavaScript switch statement much different from (and less efficient than) the switch statement of C, C++, and Java. In those languages, the case expressions must be compile-time constants of the same type, and switch statements can often compile down to highly efficient jump tables.

if none of the case expressions match the switch expression, the
switch statement begins executing its body at the statement labeled default:. If
there is no default: label, the switch statement skips its body altogether.

Arrays are iterated “live”—changes made during the iteration may affect the outcome
of the iteration.

Note also that this iteration of the keys of an object is not live as the array example above was—changes to the object o made in the loop body will have no effect on the iteration.

break and continue are the only JavaScript statements that use statement labels; 
The namespace for labels is different than the namespace for
variables and functions, so you can use the same identifier as a statement label and as
a variable or function name.

When a program runs, it is the program’s expressions that are being evaluated and the
program’s statements that are being executed. The declarations in a program don’t
“run” in the same way: instead, they define the structure of the program itself.
Loosely, you can think of declarations as the parts of the program that are processed
before the code starts running.