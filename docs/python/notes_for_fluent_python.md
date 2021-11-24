One of the best qualities of Python is its consistency.

*dunder method*: `__getitem__`, `__len__`

Unless your are doing a lot of metaprogramming, you should be implementing special methods more often than invoking them directly. The only special method that is frequently called by user code directly is `__init__`, to invoke the initializer of the superclass in your own `__init__` implementation.

### Built-in Sequences
* container sequences: `list`, `tuple` and `collections.deque` can hold items of different types
* flat sequences: `str`, `bytes`, `bytearray`, `memoryview` and `array.array` hold items of one type

Flat sequences don't contain references but physically hold their data in contiguous memory.

Another way of grouping is by mutability
* mutable: `list`, `bytearray`, `array.array`, `collections.deque`, and `memoryview`
* immutable: `tuple`, `str`, and `bytes`

List comprehensions (listcomps), generator expressions, and their siblings `set` and `dict` comprehensions now have their own local scope, like functions.

Listcomps build lists from sequences or any other iterable type by filtering and transforming items. Listcomps do everything the `map` and `filter` function do, without the functionally challenged Python **lambda**.

To initialize tuples, arrays and other types of sequences, you could also start from a listcomp, but a genexp saves memory.

Tuple unpacking works with any iterable object. The only requirement is that the iterable yields exactly one item per variable in the receiving tuple, unless you use a star(*) to capture excess items.

`tuple` supports all `list` methods that do not involve adding or removing items, with one exception --- tuples lack the `__reversed__` method. However, that is just for optimization; `reversed(my_typle)` works without it.

If `__add__` is not implemented, Python falls back to call `__add__`. 
Consider `a += b`. If `a` implements `__iadd__`, that will be called. In the case of mutable sequences, `a` will be changed in place. However, when `a` does not implement `__iadd__`, the expression `a += b` has the same effect as `a = a + b`: the expression `a + b` is evaluated first, producing a new object, which is then bound to `a`. In other words, the identify of the object bound to `a` may or may not change, depending on the availability of `__iadd__`.

Repeated concatenation of immutable sequences is inefficient, but `str` is an exception because CPython is optimized for it by allocating spare room in memory.

An intriguing corner case:
```
>>> t = (1,2,[30,40])
>>> t[2] += [50, 60]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> t
(1, 2, [30, 40, 50, 60])
```
```
>>> dis.dis('s[a] += b')
  1           0 LOAD_NAME                0 (s)
              2 LOAD_NAME                1 (a)
              4 DUP_TOP_TWO
              6 BINARY_SUBSCR
              8 LOAD_NAME                2 (b)
             10 INPLACE_ADD
             12 ROT_THREE
             14 STORE_SUBSCR
             16 LOAD_CONST               0 (None)
             18 RETURN_VALUE
```
* Putting mutable items in tuples is not a good idea.
* Augmented assignment is not an atomic operation
* Inspecting Python bytecode is not too difficult, and is often helpful to see what is going on under the hood.

Functions or methods that change an object in place should return `None` to make it clear to the caller that the object itself was changed and no new object was created.

In contrast, the built-in function `sorted` creates a new list and return it. In fact, it accepts any iterable object as an argument, including immutable sequences and generators. Regardless of the type of iterable given to `sorted`, it always returns a newly created list.

Timsort --- the sorting algorithm used in `sorted` and `list.sort` --- is stable. It is an adaptive algorithm that switchs from insertion sort to merge sort strategies.

`bisect.bisect`, `bisect.bisect_left`, `bisect.insort`, `bisect.insort_left`

If you need to store 10 million floating-point values, an `array` is much more efficient than a `list`.

Beside `collections.deque`, other Python standard library packages implement queues:
* `queue`: `Queue`, `LifoQueue`, `PriorityQueue`
* `multiprocessing`: `Queue`, `JoinableQueue`
* `asyncio`: `Queue`, `LifoQueue`, `PriorityQueue`, `JoinableQueue`
* `heapq`

`dict`, `defaultdict`, `OrderedDict`, `ChainMap`, `Counter`  
Two powerful methods: `setdefault`, `update`  
`Mapping`, `MutableMapping`, `MappingProxyType`

Each item in `bytes` or `bytearray` is an integer from 0 to 255, and not a one-character string. However, a slice of a binary sequence always produce a binary sequence of the same type --- including slices of length 1.

The only sequence type where `s[0] == s[:1]` is the `str` type.

Three different displays are used, depending on each byte value.
Both `bytes` and `bytearray` support every `str` method except those that do formating and a few others that depend on Unicode data.

`memoryview`, `struct`, `mmap`  

character encoding detecting: `Chardet`, `chardetect`

endianness: BOM

In Python 3, `map` and `filter` return generators --- a form of iterator --- so their direct substitute is now a generator expression.

A class implementing `__call__` is an easy way to creat funciton-like objects that have some internal state that must be kept acrosss invocations. A totally different approach to creating functions with internal state is to use closures.

Retriving information about parameters: `inspect` module

The `operator` module: `itemgetter`, `attrgetter`, `methodcaller`  
The `functools` module: `partial`, `partialmethod`

Decorators: `property`, `classmethod`, `staticmethod`, `functools.wraps`, `functools.lru_cache`, `functools.singledispatch`

lexical scope vs. dynamic scope

> To understand an assignment in Python, always read the right-hand side first: that's where the object is created or retrived. After that, the variable on the left is bound to the object, like a label stuck to it. Just forget about boxes.

Every object has an identity, a type and a value. An object's identity never changes once it has been created (only the value of an object changes over time); you may think of it as the object's adress in memory. The `is` operator compares the identity of two objects; the `id()` fucntion returns an integer representing its identity.

```python
>>> a = None
>>> b = None
>>> a == b
True
>>> a is b # faster than ==
True
```

The easiest way to copy a list (or most built-in mutable collections) is to use the built-in constructor for the type itself. However, using the constructor or `[:]` produces a *shallow copy*.

`copy.copy()`, `copy.deepcopy()`  
Note that making deep copy is not a simple matter in the general case. Objects have cyclic references that would cause a naive algorithm to enter an infinite loop. The `deepcopy` function remembers the objects already copied to handle cyclic references gracefully.

Mutable types as parameter defaults: bad idea

default argument is evaluated only once at the point of function definition in the defining scope.

The issue with mutable defaults explains why `None` is often used as the default value for parameters that may receive mutable values.

The `del` statement deletes names, not objects.

`weakref`

Consider using `WeakKeyDictionary`, `WeakValueDictionary`, `WeakSet` and `finalize`(which use weak references internally) instead of creating and handling your own `weakref.ref` instances by hand.

If you need to build a class that is aware of every one of its instances, a good solution is to create a class attribute with a `WeakSet` to hold the references to the instances.

Not every Python object may be the target, or referent, of a weak reference. Basid `list` and `dict` instances may not be referents, but a plain subclass of either can solve this problem easily. Most of these limitations are implementation details of CPython that may not apply to other Python interpreters.

CPython may cheat when copying:
```python
>>> t1 = (1,2,3)
>>> t2 = tuple(t1)
>>> t2 is t1
True
>>> t3 = t1[:]
>>> t3 is t1
True
```

string interning

Instances of user-defined classes are mutable by default in Python -- as in most object-oriented languages. When creating your own objects, you have to be extra careful to make them immutable, if that is a requirement.