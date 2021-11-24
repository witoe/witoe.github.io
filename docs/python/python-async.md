## Future

python 中的 Future 相当于 js 中的 Promise ，功能是把”事件发生“ 与”回调函数“ 分离。不仅可以先注册callback, 等“事件发生”（Future中是set_result, js中是resolve)后自动调用一个或多个callback; 还可以在 set_result后在注册callback. 内部通过保存”事件发生“这一状态来实现 Deferred 效果。

## Select

python中的select module中有针对不同平台的系统函数来完成IO复用的功能，最原始的是select函数, 在大多数平台上都有。poll比 select更优化一些，本质上差不多。只存在于linux上的epoll 以及 BSD 上的 kqueue，windows上的IOCP, Solaris上的devpoll 则更加优化和强大。其中IOCP是真正的异步，不存在阻塞，其它或多或少有一点阻塞，epoll和kqueue在性能上基本上更真正的异步差不多，devpoll不太清楚。

这些类select函数根据平台的不同，有的只支持sockets（IOCP), 有的还支持pipe( epoll ) 或其它file-like objects. 有的只能监听到readable/writable/error, 有的能精确区分更复杂的事件。epoll 有水平（level）触发和边沿（edge)触发。

python中的selectors module (相当于nodejs中隐含在内部的libuv库） 则将这些不同的select函数抽象成一个统一的接口，用户只需要用DefaultSelector 来获得当前平台下最适合的select。这些类select主要实现以下功能

register(fileobj, events, data=Non): 注册fileobj 以及需要监听的事件

unregister(fileobj): 注销

modify(fileobj, events, data=Non): 更改

select(timeout=None): 返回有”事件发生“的(key, events) list, 其中的key 为SectorKey类，包含fileobj, fd, events, data。该方法会根据timeout的值进行阻塞或非阻塞调用。其内部原理比较复杂，大致是结合了中断和轮询来实现的。

[epoll详细工作原理](https://blog.csdn.net/hdutigerkin/article/details/7517390)

## asyncio

有了python的callback机制，以及select module, 我们已经可以手写地实现python中的异步功能。但是，这样写会很麻烦，代码不易读。于是就有了各种第三方库来简化，如 Tornado, Twisted, Gevent, Eventlet, greenlet等。从3.4开始, python引入了标准库 asyncio.

greenlet （比较低级，一般用来构建其它库）
Eventlet (基于IO复用和coroutine, 相当于implictly调用coroutine, 不需要像coroutine那样explictly切换控制流)
Gevent (与Eventlet类似，但功能更强大）
Twisted（面向对象，基于事件驱动的网络库，比较低级）
Tornado (作为一个web框架和异步网络库使用，同样基于IO复用和coroutine）
async实现了许多功能，要理解它的话需要理解以下几个关键的东西：coroutine, Task, event_loop

## Coroutine

coroutine是通过将Future与generator结合实现的, 其核心在于：

通过yield一个Future将该运行中的coroutine控制流”挂起“ ，相当于thread中的sleep。然而这里是通过generator的机制来保存其运行中间状态，而不是thread中的context switch. 这样不仅比thread节省时间和空间资源，还能减少绝大多数的data race. 因为这里的控制流只在yield处才会被挂起，而thread的挂起是由内核决定的，可发生的任意时候（除非加锁，disable中断）。因些coroutne某种意义上可看作green thread(轻量级线程）
在需要的时候（例如Task中），通过send将某个coroutine唤醒
coroutine 的好处在于可以将异步流用同步的方式来写。

## Task

以下是Task的一个简化版
```python
class Task:
  def __init__(self, coro):
  self.coro = coro
  f = Future()
  f.set_result(None)
  self.step(f)

  def step(self, future):
  try:
  next_future = self.coro.send(future.result)
  except StopIteration:
  return

  next_future.add_done_callback(self.step)

```
每构造一个Task, 其中的coroutine就会执行，一直到yield处”挂起“，并返回一个Future。等到Future被set\_result后，该coroutine又会被”唤醒“。其中Future的set\_result是由select来完成的。

## Event_loop

run_until_complete函数接收一个或多个Task对象（若是Future的话，会自动包装生成Task)，直至所有的Task返回。这些Task的”用户代码“ 可以看作是运行在单线程中，而IO操作是通过select功能得到复用。
```python
class EventLoop:
    def run_until_complete(self, coro):
        """Run until the coroutine is done."""
        task = Task(coro)
        task.add_done_callback(stop_callback)
        try:
            self.run_forever()
        except StopError:
            pass

class StopError(BaseException):
    """Raised to stop the event loop."""

def stop_callback(future):
    raise StopError
```
有了coroutine, Task, Event\_loop 后，我们还需要自己写select的注册/注销/返回事件 等操作，register写在yield前，unregister写在yield后。但是一些支持异步的库会自动实现这两步，不需要手动来写。例如aiohttp.

selector.select()函数的调用也不需要手写，个人猜测是event\_loop自动开了这样一个coroutine (或thread)运行。
```python
while True:
    events = selector.select()
    for event_key, event_mask in events:
        callback = event_key.data
        callback(event_key, event_mask)
```