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

| Value                       | to String       | to Number | to Boolean |
| --------------------------- | --------------- | --------- | ---------- |
| undefined                   | "undefined"     | NaN       | false      |
| null                        | "null"          | 0         | false      |
| true                        | "true"          | 1         |            |
| false                       | "false"         | 0         |            |
| ""                          |                 | 0         | false      |
| "1.2"                       |                 | 1.2       | true       |
| "one"                       |                 | NaN       | true       |
| 0                           | "0"             |           | false      |
| -0                          | "0"             |           | false      |
| 1                           | "1"             |           | true       |
| Infinity                    | "Infinity"      |           | true       |
| -Infinity                   | "-Infinity"     |           | true       |
| NaN                         | "NaN"           |           | false      |
| Infinity                    | "Infinity"      |           | true       |
| {}(any object)}             | *               | *         | true       |
| []                          | ""              | 0         | true       |
| [9] (one numeric element)   | "9"             | 9         | true       |
| {'a'} (any other array)     | use join method | NaN       | true       |
| function(){} (any function) | *               | NaN       | true       |

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



# Objects

An object is an unordered collection of properties, each of which has a name and a value. Property names are usually strings (although, as we’ll see in §6.10.3, property names can also be Symbols), so we can say that objects map strings to values.



In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its “prototype.”



objects are mutable and manipulated by reference rather than by value.

The most common things to do with objects are to create them and set, query, delete, test, and enumerate their properties. A property has a name and a value. A property name may be any string, including the empty string (or any Symbol), but no object may have two properties with the same name. The value may be any JavaScript value, or it may be a getter or setter function
(or both).



three property attributes:



## Creating Objects



object literals

new Object();

Almost every JavaScript object has a second JavaScript object associated with it. This second object is known as a prototype, and the first object inherits properties from the prototype.

Objects created using the `new` keyword and a constructor invocation use the value of the prototype property of the constructor function as their prototype. So the object created by new Object() inherits from `Object.prototype`, just as the object created by `{}` does. Remember: almost all objects have a prototype, but only a relatively small number of objects have a prototype property. It is these objects with prototype properties that define the prototypes for all the other objects.

prototype chain

`Object.create()`

## Querying and Setting Properties

Property assignment examines the prototype chain only to determine whether the assignment is allowed. 

There is one exception to the rule that a property assignment either fails or creates or sets a property in the original object. If o inherits the property x, and that property is an accessor property with a setter method (see §6.10.6), then that setter method is called rather than creating a new property x in o. Note, however, that the setter method is called on the object o, not on the prototype object.



`Object.assign()`



The `valueOf()` method is much like the toString() method, but it is called when JavaScript needs to convert an object to some primitive type other than a string—typically, a number. 



Note that this ... syntax is often called a spread operator but is not a true JavaScript operator in any sense.



data property vs. accessor property



# Arrays

An array is an ordered collection of values. It is a specialized form of object.

* It is untyped
* It is dynamic
* It may be sparse
* It is zero-based and uses 32-bit indexes



`Array.prototype`



**Array-like** objects are non-array objects that have a numeric length property and have values stored with properties whose names happen to be integers. When

typed arrays



## Creating Arrays

literal

spread operator

new Array()

Array.of()

Array.from()

## Reading and Writing Array Elements

JavaScript converts the numeric array index you specify to a string—the index 1
becomes the string "1"—then uses that string as a property name. 

```javascript
let o = {}; // Create a plain object
o[1] = "one"; // Index it with an integer
o["1"] // => "one"; numeric and string property names are the same
```



It is helpful to clearly distinguish an array index from an object property name. All
indexes are property names, but only property names that are integers between 0 and
232–2 are indexes.



Note that you can index an array using numbers that are negative or that are not integers. When you do this, the number is converted to a string, and that string is used as the property name. Since the name is not a non-negative integer, it is treated as a regular object property, not an array index. Also, if you index an array with a string that happens to be a non-negative integer, it behaves as an array index, not an object property. The same is true if you use a floating-point number that is the same as an
integer:

```javascript
a[-1.23] = true; // This creates a property named "-1.23"
a["1000"] = 0; // This the 1001st element of the array
a[1.000] = 1; // Array index 1. Same as a[1] = 1;
```



The fact that array indexes are simply a special type of object property name means
that JavaScript arrays have no notion of an “out of bounds” error. When you try to
query a nonexistent property of any object, you don’t get an error; you simply get
undefined.



## Sparse Arrays

Arrays that are sufficiently sparse are typically implemented in a slower, more
memory-efficient way than dense arrays are, and looking up elements in such an
array will take about as much time as regular object property lookup.



Every array has a length property, and it is this property that makes arrays different from regular JavaScript objects. That length is guaranteed to be larger than the index of every element in the array. In order to maintain this invariant, arrays have two special behaviors. The first we described above: if you assign a value to an array element whose index i is greater than or equal to the array’s current length, the value of the length property is set to i+1. The second special behavior that arrays implement in order to maintain the length invariant is that, if you set the length property to a non-negative integer n smaller than its current value, any array elements whose index is greater than or equal to n are deleted from the array.



## Adding and Deleting Array Elements

push, pop, shift, unshift, splice

delete

Deleting an array element is similar to (but subtly different than) assigning unde
fined to that element. 



## Iterating Arrays

entries()

forEach



## Array Methods

Note that filter() skips missing elements in sparse arrays and that its return value is
always dense. To close the gaps in a sparse array, you can do this:

```javascript
let dense = sparse.filter(() => true);
```

And to close gaps and remove undefined and null elements, you can use filter, like
this:

```javascript
a = a.filter(x => x !== undefined && x !== null);
```



> Missing elements are not elements whose value are undefined !



# Functions

One of the important things to understand about function declarations is that the
name of the function becomes a variable whose value is the function itself.



Function
declaration statements are “hoisted” to the top of the enclosing script, function, or
block so that functions defined in this way may be invoked from code that appears
before the definition.















