---
title: Scope and Closure
---
Notes for "scope" and "closure".

## Lexical scope
Javascript only has lexical scope, but not dynamic scope:
* lexical scope: 在写代码（或定义）时确定的，关心的是函数在何处声明，而不关心何处调用。
* dynamic scope: 不关心函数和作用域是如何声明以及在何处声明的，只关心它们从何处调用。换句话说， 作用域链是基于（运行时）调用栈的。

`this` 也是在动态调用时确定的，this机制某种程度上很像动态作用域。

### block scope
`for` `if` `try{}catch(){}` ES6之前 `var`不能定义块作用域变量，只能通过`try...catch...`来模拟。ES6之后可以用`let` 和 `const` 来声明块作用域变量。

注意： let/const用在for上面时，let/const 会绑定到每个循环块中。
```js
for (const i = 0 ; i < 10; i++){  // 每次迭代都会绑定 const i = ...
}
```

### 提升
1. 只有声明本身会被提升，赋值不会
2. 函数声明会被提升，函数表达式不会
3. 函数会先于变量提升
```js
foo() //TypeError
bar() //ReferenceError
console.log(a) // undefined
var a = 2;
var foo = function bar(){
    console.log('bar')
}
baz()  // baz

fun()
var baz
function baz(){
    console.log('baz')
}
```
4. 重复var声明会被忽略，但后面出现的函数声明还是会覆盖前面的
```js
fun()

function fun() {
    console.log(1)
}

function fun() {
    console.log(2)
}

var fun = function () {
    console.log(3)
}

fun()
// 2 3
```
### Scope chain
注意区分 ReferenceError 与 TypeError: 一个是scope查找失败，一个是查找成功后的操作非法。
运行时identifier查找分种：LHS 和 RHS. 两种查找都会从当前的scope object一直往上，直到查找成功，或到达 root (即global scope). RHS查找失败会抛出 ReferenceError, LHS查找在stric mode下也会抛出 ReferenceError, 在非strict mode下则会在当前scope中定义该identifer. 对RHS查找的值进行不合理的操作会抛出TypeError.

javascript 引擎对于语句 `var a = 2` 会分两步执行 `var a, a = 2`. 若当前scope中`a`已存， 则`var a` 会被忽略。

区分函数声明与函数表达式: 看`function`关键字是否是整个声明的第一个词
函数声明：将函数名注入到当前scope
函数表达式： 函数名只在当前表达式中有效 （例如 IIFE)

## Closure
注意区分function, function object 与 scope object:
1. 代码执行前，所有的function声明构成一棵树 *function tree*{.b}（由函数的定义很明显可以看出）。
2. 代码执行(在某个scope object中）到某个function声明时，会生成一个该function的一个function object, 该function object 会关联到该 scope object (可以把该scope object叫作该function object的出生地scope）

> each funciton object has a reference to its "birth scope", each call of this function object results a child scope which inherits that "birth scope"
> Some may define closure to be the definition of a function along with its reference to the scope chain. A scope is created only when the funciton is called. But, I prefer use scope and closure interchangably.

3. 每个function object的每次调用会产生一个不可见的scope object，该scope object会指向该function object的出生地scope。 因此，所有的scope objects也构成一棵树 *scope tree*{.b}：因为除了global scope外，每个scope object 都指向一个出生地scope. 每个scope向上构成一条*scope chain*{.b}.
4. main script 可以看作外面封装了一个IIFE函数 `(function(){ //scripts })()`
```js
let bar1, bar2
function foo(x){
    let a = x
    function baz(){
        console.log(a)
    }
    if(x == 2){
        bar1 = baz;
    }else if(x == 3){
        bar2 = baz;
    }
}  // 一个 foo object (处于global scope中）

foo(2,0)
foo(3,1) // 二个 foo scope object (对应两个 baz object)

bar1()
bar2()
// 两个baz object 分别产生各自的scope object, 各自关联到不同的foo scope object

```
5. 总结一下，funciton object(不是function声明！） 产生于当前的scope, 并且会*指向*{.b}（reference)该scope, function object每次调用会生成对应的function scope. 可以理解为每个function object有一个scope object 在外面包（closure)着它, 从而该funciton object调用时能访问这个 closure。scope object是树型嵌套的. 函数调用执行完后，相应的scope obejct若没有reference, 则会被垃圾回收掉。若有内部函数传递出来，则因为该内部函数reference 这个scope object, 导致它不会垃圾回收。另外，这个scope object（closure)内部的变量成为私有的，只能由传递出来的函数访问。

> function object可以记住它的出生地scope, 若该function object在其它scope中调用，就产生了闭包。

6. 一般说来，function object若没有传出声明所在的scope，那么根据lexical scope就能访问外面的变量，有些人就不会把这个scope叫做closure。只有某个function object （变量object不行）传到其它 scope中调用，才能发挥出 closure的作用。个人认为即使在声明所在的scope里调用，也当作是 closure.



7. 除了function scope, 块也有scope
```js
for(let i = 0; i < 5;i++){
	setTimeout(funciton Timer(){
    console.log(i)}, i*1000);
}
// 0 1 2 3 4
```

8. 闭包实现模块(ES6之前）
要用作真正的模块，需满足：
* 必须有外部的函数, 该函数必须至少调用一次（生成closure/scope), 每次调用生成一个新的模块实例
* 返回值里面必须有内部函数(否则原scope会被垃圾回收），通过这个内部函数可以访问closure中的私有变量

简单的修改可以实现单例模式：
```js
let foo = (function CoolModule(){
	//...
})()
```
*ES6的模块API更加稳定*{.r}






## References
[How do JavaScript closures work under the hood](https://dmitryfrank.com/articles/js_closures)[^1]

This is the best article I've read that illustrats how "closures" works and what is going on behind the scene when they're used.
### 1. scope objects

Each function object has a "scope" property that points to the scope the function is defined. Whenever a function is called, a corresponding scope is created. (If same function is called multiple times, then multiple seprate scope object are created.) This new created scope object has a pointer pointing to its parent scope object, which is the scope property of the function object, resulting in a scope chain.

Scope chain works as same as prototype chain, except that `ReferenceError` is throwed rather than `undefiend` is returned.

Whenever there is a reference to it, a scope exists, even if the corresponding function is returned. Otherwise, it will be garbage-collected on occasion.

### 2. this
`this` is not saved as a part of the scope chain. Instead, value of `this` depends on the "function invocation pattern".
* method invocation pattern (implicit binding)
* function invocation pattern (default binding)
* constructor invocation pattern (`new` binding)
* apply invocation pattern (explicit binding)
Function.prototype.apply/call/bind/

Priority: `new` > explicit > implicit > default

Note:
* explicit binding `this` to `null` results in default binding
* `(p.foo = foo)()` is default binding, not implicit binding (to `p`)
* `this` in arrow function is binded according to outer function (the function in which the arrow function is defined)

dom中事件注册可以用以下方法
```
document.getElementById('btn').onclick = function () {
    let that = this
    let cb = function(){
        alert(that.id)  // btn
    }
    cb()
}
```
上面的`that`会指向 "#btn"这个 element 是因为, onclick最终会被该 element 调用，类似 `document.getElementById('btn').onclick`
具体可以看下面的例子：
```
let a = {
    name: "a"
}
name = "global"
a.fun = function(){
    let that = this
    let cb = function(){
        console.log(that.name)
        console.log(this.name)
    }
    cb()
}

b = {
    name: "b",
    fun: a.fun
}
c = a.fun
a.fun()  // a global
b.fun()  // b global
c()   // global global

```

For more details on closure, also refer to [^2] and [^3]
[^1]: [Dmitry Frank. How do JavaScript closures work under the hood ?](https://dmitryfrank.com/articles/js_closures)

[^2]: [Stackoverflow. Several excellent introductions to closures. (especially the two most voted)](
http://stackoverflow.com/questions/111102/how-do-javascript-closures-work).

[^3]: [MDN. Function reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
