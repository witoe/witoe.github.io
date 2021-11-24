scope, context, closure
```python
def numb(i):
    return i*k
k = 2
print(numb(3))  # 6
```

`nonlocal` can be used to bind variables in the nearest outer scope. It cannot bind global variables.
```python
def f1():
    i = 1
    j = 2
    k = 5
    def f2():
        nonlocal j
        j = 3
        print(j) # 3
        def f3():
            nonlocal j,k
            j = 4
            k = 6
        f3()
    f2()
    print(j,k) # 4 6
f1()
```

```python
b = 6
def f2(a):
    print(a)
    print(b) # UnboundLocalError: local variable 'b' referenced before assignment
    b = 9
f2(3)
```

`nonlocal` must bind an existing variable, while `global` can introduce new variable.
