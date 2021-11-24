iterable vs. iterator
generator function每次调用都会产生一个新的iterator实例，该iterator同时也是iterable，含有`Symbol.iterator`函数，基本上这个函数就是`return this`

## generator 控制异步回调
在generator中yield一个异步操作，在该异步操作的回调中重启该generator. 在生成器内部我们实现了“用同步形式来调用异步操作”，而回调细节被封装隐藏起来。
```js
function foo(url){
    ajax(ur, (err,data)=>{
        if(err){
            it.throw(err)
        }else{
            it.next(data)
        }
    })
}

function *main(){
    try {
        const text = yield foo('http://example.com')
        console.log(text)
    }catch(err){
        console.error(err)
    }
}

const it = main();

it.next()
```
这里yield返回的是undefined, 并没有给外界传递消息。注意，使用生成器可以达到“同步顺序”的目的，但失去了promise的可信任可组合功能。
> ES6中最完美的世界就是生成器（看似同步的异步代码）和 Promise(可信任可组合）的结合

## generator + Promise
将异步操作ajax用promise封装，并用yield返回这个promise. 这样我们就能很好地利用promise的功能. 与上面的代码相比，这里的generator是通过promise决议来重启的。

```js
function foo(url){
    return request(url)   // request返回一个promise
}

function *main(){
//与上面一样，无需修改
}

const it = main()
const p = it.next()
//等待promise决议
p.then(function(text){
    it.next(text)
}, function (err) {
    it.throw(err)
})
```

前面的generator `*main()`都只有一个异步操作，如果有多个异步操作，手动驱动(启动/重启）该generator 会相当麻烦，最好是使用专门设计的工具（ES6未提供，很多Promise库提供）。以下为一个示例：
```js
//Benjamin Gruebaum(@benjamingr on GitHub)

function run(gen){
    const args = [].slice.call(arguments, 1)
    const it = gen.apply(this, args)
    
    return Promise.resolve().then(funciton handleNext(value){
        const next = it.next(value)
        return (function handleResult(next){    //此次封装是为了将该函数实名化，以备后面调用
            if(next.done){
                return next.value;
            }else{
                return Promise.resolve(next.value).then(handleNext, function handleError(err){
                    return Promise.resolve(it.throw(err)).then(handleResult)  // 注意！
                })
            })(next);
        }
    })
}
```

## ES8中的`async/await`
`async` function总是返回一个promise, `await` 接受一个promise （thenable) 并（异步地）等待它返回。如果你await了一个Promise, async函数就会自动获知要做什么，它会暂停这个函数（就像生成器一样），直到promise决议。

## 生成器委托
`yield *`可以委托到任意的iterator

## Promise vs. thunk
Promisify 与 thunkify 类似，本质上都是发出一个请求，并分别由返回的promise和thunk表示对这个请求的未来的答复。生成器中yield也可授受一个thunk, 只需要一个更智能的run()工具。thunk可看作promise的简化版，没有可信任和可组合性。

## generator手工实现
generator可以通过函数闭包与状态机来实现：
* 函数闭包可以保持多次调用的上下文
* 状态机模拟每次调用的流程控制

考虑如下一个简单的generator
```js
function* foo(url) {
    try {
        console.log("requesting:", url)
        let val = yield request(url)
        console.log(val)
    } catch (err) {
        console.log("Oops:", err)
        return false
    }
}
```
可以通过以下代码来手工实现，该实现可用于ES6之前，也展示了generator的实现原理。
```js
function foo(url) {
    let state
    let val

    function process(v) {
        switch (state) {
            case 1:
                console.log("requesting:", url)
                return request(url)
            case 2:
                val = v
                console.log(val)
                return;
            case 3:
                let err = v;
                console.log("Oops:", err)
                return false
        }
    }

    //构造并返回一个iterator
    return {
        next: function (v) {
            if (!state) {
                state = 1
                return {
                    done: false
                    value: process()
                }
            } else if (state == 1) {
                state = 2
                return {
                    done: true
                    value: process(v)
                }
            } else {
                return {
                    done: true
                    value: undefined
                }
            }
        },
        throw: function (e) {
            if(state==1){
                state = 3
                return {
                    done: true
                    value: process(e)
                }
            }else{
                throw e
            }
        }
    }
}
```










