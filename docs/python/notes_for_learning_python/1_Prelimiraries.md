# Preliminaries


## 赋值是引用赋值
In one word, after `exp1 = exp2`, exp1 points to the same place as exp2. Python always follows a reference to an object whenever the reference is used.
```python
s = [([0,1],2),3];
s.append(s[0]);
x = s[0];
#x[0] = 1;
s[0][0][0] = 3;
print(s[2][0][0],x[0][0]); # 3 3
```

For lists, if `a[:], a[k]` appear in expresion, they are copied, e.g. after `b = a[:3]`, b refers to a new object. If `a[:],a[k]`appear on the left side of assignment, they referred to the original object, e.g. after `a=[0,1,2] a[:]=[0,1]`, a becomes `[0,1]`. 
When we say copy, we mean shallow copy.

```python
a = [0,1];
b=a;
c=a[:]
a[0] = 1
print(b,c); #[1,1] [0,1]
```


