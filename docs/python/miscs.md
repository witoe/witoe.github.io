## The Python Interpreter
```python
>>> -3//2
-2
>>> _ ** 2
4
```
## Pitfalls
### index, slice
`s[-1]` equals `s[len(s)-1]`, it does not cause error.
### list is mutable

Thread
* Lock 即 Mutex, RLock 是一种特殊的Lock, 在同一线程中可多次获取（需多次释放），支持 acquire() 和 release()
* Condition是由一个主Lock (可以是RLock)和若干个 Waiter Lock 组成，除acquire(), release()外还支持wait(), notify()
* Semaphore 是带counter的Condition
* Event是Condition的一个adaptor，支持set(), wait(), clear()
* Queue 是由若干个Contiiton实现的queue, 支持 put(), get(), task_done(), join()

[Python threads synchronization: Locks, RLocks, Semaphores, Conditions, Events and Queues](http://www.laurentluce.com/posts/python-threads-synchronization-locks-rlocks-semaphores-conditions-events-and-queues/)

[Understanding Asynchronous IO With Python 3.4's Asyncio And Node.js](http://sahandsaba.com/understanding-asyncio-node-js-python-3-4.html)
[Python 开源异步并发框架的未来 ](https://segmentfault.com/a/1190000000471602)(2014年4月)