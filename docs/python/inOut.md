## Input on newcoder

```python
import sys 
for line in sys.stdin:
    a = line.split()
    print(int(a[0]) + int(a[1]))
```

Alternatively, we can use the `input()` function:
```python
a = input().split()
print(int(a[0])+int(a[1]))
```

```python
while True:
    try:
        y=int(input())
        t += y
    except:
        break
print(t)
```