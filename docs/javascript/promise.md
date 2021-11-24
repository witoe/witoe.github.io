---
title: Promise
---
## References
[Javascript promise, under the hood.](https://medium.com/@ningxia/javascript-promises-under-the-hood-4ce853fcb2c9)

This article illustrate how promise works by writing its own promise library squab. It clearly shows what "promise" generally looks like.

[Promise by 廖雪锋](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345008539155e93fc16046d4bb7854943814c4f9dc2000)

## Summary
注意区分：决议（resolve), 完成（fulfill) 拒绝（reject) 异常(error)

A Promise represents a value which may be available now, or in the future, or never.
Before ES6, it's just a syntactical sugar for asynchronous function callback. (Not for ES6, in which promise has *built-in async support.*{.b} 

ES6在事件队列（macroqueue)的基础上，增加了一个任务队列（microqueue)。 microqueue的优先级更高，js引擎每处理完一个macroqueue事件，它都会优先处理所有的microqueue中的事件，等microqueue中的事件处理完后再处理macroqueue中的下一个事件。 
```js
function promisify(v){
    return new Promise(function (resolve, reject) {
        console.log(v)
        resolve(v+2)
        console.log(v+1)
    })
}

let p = promisify(0)
setTimeout(()=>{
    console.log('-1')
},0)
p.then((v)=>{
    promisify(v)
})
// 0 1 2 3 -1
```

Problems with callback
1. 非线性，难理解，易出错
2. 信任问题，控制反转
   * 过早调用 （Zalgo风险）
   * 过晚调用（或不调用)
   * 调用次数过多或过少
   * 未能传递所需的环境或参数
   * 吞掉可能出现的错误和异常

> Promise并没有摈弃回调，只是把回调的安排转交给了一个位于我们和其它工具之间的可信任的中介机制。

Some notes for `promise`:
1. 流程控制
2. 注册事件
3. 如何调度的:同一promise的then调用顺序？不同promise的then调用顺序？
4. 由于promise决议后只能有一个值（或一个拒绝理由), resolve/reject 只接受一个参数，其它参数会被忽略(`{tc-b} 避免传递参数混乱`)。多次调用resolve 也会只执行第一个（*避免过多调用*{.b}）。
```js
function promisify(v){
    return new Promise(function (resolve, reject) {
        console.log(v)
        resolve(v+1,v+2)
        resolve(v+3,v+4)
    })
}

let p = promisify(0)
p.then((v,w)=>{
    console.log(v,w)
})
//0 1
```
5. Promise 把整个操作（包括异常）变成了异步，避免了Zalgo风险. 从而使得`then`可以在‘操作’的后面提供 resolve/reject 参数. 注意，构造promise时，虽然 resolve/reject 是以参数形式存在，但是可以自由使用它们。以下面的promisify为例：
```js
function request(url){
	return new Promise( function(resolve,reject){
    	ajax(url,resolve);
    });
}
```
ajax函数是立即执行的，它可以把 （此时空的）resolve 当作回调。然而，当ajax函数异步完成后需要调用 resolve 时，Promise机制可以保证 resolve的调用顺利地进行。如何保证？首先ajax是异步调用resolve的，即使把ajax换成同步函数，promise也会使其异步化（*避免过早调用*{.b}），这样可以保证在request同一个tick中，通过then得到的resolve都是已经准备就绪的。注意，即使不在同一个tick中注册的resolve函数也会被顺利执行(*避免过晚或过少调用*{.b}）。
```js
function promisify(val){
    return new Promise(function(resolve,reject){
        console.log(val);
        resolve();
    })
}
console.log(1)
let  p = promisify(2)
console.log(3)

let q = promisify(4)
let z = q.then(()=>{
    console.log(7)
    return p.then(()=>{
        console.log(9)
    })
})
console.log(5)
p.then(()=>{
    console.log(8)
})
console.log(6)
//1 2 3 4 5 6 7 8 9
```

6. Promise.resolve() 会展开thenable的值,从而得到可信任的promise。若传入的参数是真正的promise, Promise.resilve() 什么都不会做，只会直接返回这个参数。
7. resolve和reject的返回值会作为then返回的新promise的决议值。resolve/reject都可以得到新的未决议的promise (可能fullfill,也可能reject). 注意区分当前promise和then得到的新promise, 当前reject，但then得到的新promise是既可以fullfill又可以reject的。
然而，`new Promise`中的 resolve/reject则不同。 若提供的参数是promise, resolve会展开它，决议值是该参数promise的决议值（可能是完成的也可能是拒绝的）。而reject的决议值则只能是拒绝的。因此 `new Promise( function(resolve,reject){})` 中的 resolve 确实是“决议” （而非完成）的意思。而then方法中最好理解为 `then(fulfilled, rejected)`. 前者中resolve/reject 是形参，后者中 fulfilled/rejected 是实参。

8. then未提供resolve或reject时，默认的resolve/reject会把当前决议值（或拒绝理由）传递下去。`catch(err){}` 则是`then(null, function(err){})` 的缩写。
9. promise chain中的错误（异常或reject)可以通过在chain的末端加一个`catch()`来处理，如果中间的then没有rejected处理，那么默认的rejected函数会将该错误往下传。唯一的问题是最后的catch仍返回一个可能出错的promise，这个问题ES6本身没有提供解决方案。

## `new Promise()`
1. `new Promise(function(resolve,reject){})` 中形参resolve/reject对应的实参是 Promise.resolve/Promise.reject. 以下两种构造是等价的
```js
let p =new Promise(function(resolve,reject){resolve(1);});
let q = Promise.resolve(1);
```
2. `new Promise()` 中的代码的立即执行的（当前tick)， 其中的resolve/reject语句是异步执行的，其它语句（之前和之后的）可以看作是同步的。
```js
function promisify(v){
    return new Promise(function (resolve, reject) {
        console.log(v)
        resolve(v+2)
        console.log(v+1)
    })
}

let p = promisify(0)

p.then((v)=>{
    console.log(v)
})
// 0 1 2
```
3. `new Promise(null)` 并不会返回一个rejected promise, 而是抛出异常。因为promise构造过程中出现异常会使得promise构造失败。

## `then`方法
1. 调用promise的`then()` 会自动创建一个新的promise从调用返回
2. 在then的resolve/reject内部，如果返回一个值或抛出一个异常，新返回的promise就相应地决议为该值.
3. 如果resolve/reject 返回一个promise, 它将会被*展开*{.r}，不管它的决议值是什么，都会成为then返回的新promise的决议值。(新返回的promise的决议值是那个promise展开后的值，不是那个promise本身）

## 其它API
`all`, `race`, `none`, `any`, `first`, `last`

### Promise局限性
1. promise chain返回的是最后一个promise, 没有保存中间promise的引用，无法在外面给中间的promise关联处理函数。若中间的promise有自己的错误处理，则最后的promise不会得到错误的通知 （除非中间的错误处理函数继续产生拒绝）。这与`try...catch...`类似。
2. promise只能决议为单一值，需要多个值的话可以封闭成单个值，但是在复杂的场景中会比较笨重。一种方法是可以分解成多个promise后用promise.all来处理。
3. promise只能决议一次，不能像监听事件一样，事件每发生一次相应的监听函数就会被调用一次。一种方法是每次事件触发后构造一个新的promise.
4. 已有代码大都基于回调，需要手动promisify. 可以编写类似于`Promise.wrap()`的函数来解决，该wrap函数返回一个promisory. promisory调用才返回一个promise. 例如 `let request = Promise.wrap(ajax);` ES6并未提供类似的wrap函数。
5. promise无法取消。一种方法是用“门” 来hack. 单独的promise不应该可取消，但是取消一个promise chain是合理的。

## Promise/A+
[The official specification](https://promisesaplus.com)

A 'promise' is an object or function with a `then` method whose behavior conforms to this specification.

A promise must be in one of three states: pending, fulfilled, or rejected.

When pending, a promise:
* may transition to either the fulfilled or rejected state.

When fulfilled, a promise:
* must not transition to any other state.
* must have a value, which must not change.
When rejected, a promise:
* must not transition to any other state.
* must have a reason, which must not change.

Here, “must not change” means immutable identity (i.e. ===), but does not imply deep immutability.

A promise must provide a then method to access its current or eventual value or reason.

A promise’s then method accepts two arguments (both are optional, non-function are ignored):
```
promise.then(onFulfilled, onRejected)
```
`then` must return a promise
```js
'use strict';
var p1 = new Promise(function (resolve, reject) {
    console.log('p1 creating...'); //execute immediately
    reject('rejecting');  //transit to fulfilled
    resolve('resolving'); //invalid
    console.log('p1 created'); //execute immediately
});
console.log(typeof p1); //object
console.log(p1);
p1.then(function (result) {
    console.log(result)
}, function (err) {
    console.log(err)
});
```
output:
```
p1 creating...
p1 created
object
Promise { <rejected> 'rejecting' }
rejecting
```
