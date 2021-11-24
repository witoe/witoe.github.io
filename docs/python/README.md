## Key Points

### Important and hard points

1. 强类型，动态类型, 脚本语言
2. No compile time, only runtime.
3. assignment is name binding. Shallow copy. Immutable, mutable.
4. Virtually everything that your Python program creates or acts on is an object: functions, classes, types
5. Namespace, Context, scope, closure.
6. Iterable, iterator, generator, comprehension

### Common libraries
math, random, re, time, timeit, profile, struct, itertools, functools, operator

### Common builtin functions
help, dir, len, range, sum, map, filter, reduce, zip, sorted, isinstance, type, copy, next, enumerate, getattr, hasattr, setattr, iter, id, reversed, type, slice
### 编码
python使用unicode编码, 字符串以unicode储存在内存中. python区分字符串string和字节串bytes.

```bash
>>> b'ABC'.decode('ascii')
'ABC'
>>> b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
'中文'
```

### Common Containers
ordered set: use `OrderedDict`  
multiset, multiDict: use `set` and `dict`  
deque: `deque`
priority queue: `heapq`

### Types Classification

* immutable: number, string, tuple
* mutable: list, dict, class-object

Function arguments are passed by values: immutable objects are copied by value, while mutable objects are copied by aliasing.

classes themselves are objects.

### Iterable, Iterator, Generator

* Iterable: implementing iter() to return an iterator.
* Iterator: implementing next() and using StopIteration to indicate the end of iteration.
* Generator: a function returning an iterator.

An iterator can be traversed only once:
```python
>>> zipped = zip(range(3),'ABCD')
>>> list(zipped)
[(0, 'A'), (1, 'B'), (2, 'C')]
>>> list(zipped)
[]
```

### Slicing
In s[i:j:k], if `i` or `j` is negative, the index is relative to the end of sequence `s`: `len(s) + i` or `len(s) + j` is substituted. But note that `-0` is still `0`. `k` must be a nonzero integer.
```python
>>> s = "ab\\cdefg"
>>> s[::-1] # In s[a:b:c], c must be nonzero
'gfedc\\ba'
>>> s[-10:100]
'ab\\cdefg'
>>> len(s)
8
>>> s[-9:100:2]
'a\\df'
>>> s[1:-0:1]
''
>>> s[1:-1:1]
'b\\cdef'
```

### Functions
```python=
i = 5
def f(a, L=[i]):
    L.append(a)
    return L
i = 6
print(f(1)) #[5, 1]
print(f(2)) #[5, 1, 2]
print(f(3)) #[5, 1, 2, 3]
```
Each call creates a scope object, in which there is a local `L` pointing to the `L` in the function object `f`. So each call of `L.append(a)` change the `L` in `f`. Compare with the following
```python=
i = 5
def f(a, L=[i]):
    L = L + [a]
    return L
i = 6
print(f(1)) #[5 1]
print(f(2)) #[5 2]
print(f(3)) #[5 3]
```

### Dictionary
Tuples can be used as keys if they contain only strings, numbers, or tuples; if a tuple contains any mutable object either directly or indirectly, it cannot be used as a key.

### Some Details

1. 赋值表达式右边的先执行完，再执行左边的

   ```python
   a,b = b,a # swap
   ```

2. list slice在赋值表达式左边时，等价于先删除某些位置的值，再在某一个位置插入一组值

   ```python
   a = [1,2,3,4];
   a[-10:-7] = [0];
   a[10:20] = 5;
   print(a); # [0,1,2,3,4,5]
   ```

3. An assignment is a statement, not an expression.

   ```python
   if a = 1:   # error
    pass;
   ```


The hierarchy of python program structure:
   1. Programs are composed of modules.
   2. Modules contain statements.
   3. Statements contain expressions.
   4. Expressions create and process objects.

### Module
A program doesn’t run any faster when it is read from a .pyc file than when it is read from a .py file; the only thing that’s faster about .pyc files is the speed with which they are loaded.

## Resources
### Articles
[python zip](https://realpython.com/python-zip-function/)

[python namespace scope](https://realpython.com/python-namespaces-scope/)

[python lambda](https://realpython.com/python-lambda/)

[python reduce](https://realpython.com/python-reduce-function/)

### Tools
[Python tutor: visualize execution](https://pythontutor.com)   (including c,c++,java,javascript)