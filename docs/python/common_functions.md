## builtins
### sorted
`sorted` builds a **new** sorted list from an iterable. It doesn't change the original value in place.

```python
>>> numbers = [6, 9, 3, 1]
>>> sorted(numbers)
[1, 3, 6, 9]
>>> numbers
[6, 9, 3, 1]
```

### sum
`sum(iterable, /, start=0)` accepts an iterable, not multiple numbers
```python
>>> sum([1,2])
3
>>> sum(1,2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'int' object is not iterable
>>> reduce(sum,[1,2])
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'int' object is not iterable
```

