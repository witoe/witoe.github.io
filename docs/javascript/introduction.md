---
title: Basics
---

## Basics
* scripting language (interpreted, not complied)
* object-oriented (inheritance, encapsulation, polymorphism)
* prototype-based (also called classless, prototype-oriented, or instance-based)
    prototype is essentially object, which can be modified dynamically, while "class" can't
* dynamic-typing (type of variable are not fixed)

## How to use it ?
In order to be executed by a browser, js scripts should be used by embeding it in a html file.
You can directly place js source code in html with `<script>` tag
`<script>...</script>`
or place it in a seperate js file then include it in the html file using `<script src="/path/to/js"></script>`
Js script can be placed anywhere in html file. Usually it is placed in `<head>`. Placing it at the bottom of page can avoid possible loading delay.

## Data types
JavaScript has six data types. Five data types are primitives:
* string
* number
* bigInt
* boolean
* null
* undefined
* symbol: (since ES2015)  A data type whose instances are unique and immutable.

One type is complex:
* object ( includes array, function )

### `typeof` operator and equality
[A summarization from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#Description)
>You can consider it a bug in JavaScript that typeof null is an object. It should be null.
```js
typeof undefined             // undefined
typeof null                  // object
```
All `new` expression results in type `object`, except:
```
console.log(typeof new Function())    // 'function'
``` 
[javascript equality table](https://dorey.github.io/JavaScript-Equality-Table/)  
[`===` vs. `==`](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)

Do not confuse the primitive Boolean values true and false with truthiness or falsiness of the `Boolean` object. Any value that is not `false`, `undefined`, `null`, `0`, `-0`, `NaN`, or the empty string (`""`), and any object, including a Boolean object whose value is false, is considered truthy when used as the condition. 

## Object
## Declaration
There are three types of declarations (since ES6):
* var: global variable or function level variable.
* let: block level local variable.
* const: read-only constant. Itself can't be assigned while it's properties can. Must be initialized. It's scope is the same as 'let'

### value
variables declared by 'let' and 'var' with no initial value has the value "undefined"
### variable scope
* global: declared outside of function
* local: declared in function
  function level
  ```
  if (true) {
    var x = 5;
  }
  console.log(x);  // x is 5
  ```
  block level
  ```
  if (true) {
    let y = 5;
  }
  console.log(y);  // ReferenceError: y is not defined
  ```
### variable hositing and function hoisting
Variables in JavaScript are in a sense "hoisted" or lifted to the top of the function or statement. However, variables that are hoisted will return a value of undefined. In ECMAScript 2015, let (const) will not hoist the variable to the top of the block.
For functions, only function declaration gets hoisted to the top and not the function expression.
```javascript
/* Function declaration */

foo(); // "bar"

function foo() {
  console.log("bar");
}


/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function() {
  console.log("bar2");
};
```
### global variables
Global variables are in fact properties of the global object. In web pages the global object is window
