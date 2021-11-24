Notes for [official tutorial](https://docs.python.org/3/tutorial/index.html)
## Errors and Exceptions
The sole argument to raise indicates the exception to be raised. This must be either an exception instance or an exception class (a class that derives from Exception). If an exception class is passed, it will be implicitly instantiated by calling its constructor with no arguments.

Exceptions should typically be derived from the Exception class, either directly or indirectly.

## Classes
In C++ terminology, normally class members (including the data members) are public (except see below Private Variables), and all member functions are virtual.

### Namespaces and Scope
Namespaces:
* global of modules `__main__`, `builtins`
* local of functions

A namespace is a mapping from names to objects. Most namespaces are currently implemented as Python dictionaries, but that’s normally not noticeable in any way (except for performance), and it may change in the future.

The local namespace for a function is created when the function is called, and deleted when the function returns or raises an exception that is not handled within the function. Of course, recursive invocations each have their own local namespace.

A scope is a textual region of a Python program where a namespace is directly accessible. “Directly accessible” here means that an unqualified reference to a name attempts to find the name in the namespace.

Although scopes are determined statically, they are used dynamically: LEGB searching rules.

It is important to realize that scopes are determined textually: the global scope of a function defined in a module is that module’s namespace, no matter from where or by what alias the function is called. On the other hand, the actual search for names is done dynamically, at run time — however, the language definition is evolving towards static name resolution, at “compile” time, so don’t rely on dynamic name resolution! (In fact, local variables are already determined statically.)

 In fact, all operations that introduce new names use the local scope: in particular, import statements and function definitions bind the module or function name in the local scope.

 ### classes
 When a class definition is entered, a new namespace is created, and used as the local scope — thus, all assignments to local variables go into this new namespace. In particular, function definitions bind the name of the new function here.

 When a class definition is left normally (via the end), a class object is created. Class objects support two kinds of operations: attribute references and instantiation. Valid attribute names are all the names that were in the class’s namespace when the class object was created. 

 ```python
 class A:
    i = 0
    l = []
    def f1(self):
        pass

a = A()
b = A()
print(a.i) # 0
b.i = 1
print(a.i, b.i) # 0,1
b.l += [1,2]
print(a.l, b.l) #[1,2] [1,2]
```

```python
class A:
    i = 0
    l = []
    j = i
    def f1(self):
        print('f1:',A.i, A.j)   # must use A to reference i,j

    def f2(self):
        A.f1(self)   # must use A to reference f1

a = A()
a.f2() # f1: 0 0
```

Each value is an object, and therefore has a class (also called its type). It is stored as `object.__class__`.

Derived classes may override methods of their base classes. Because methods have no special privileges when calling other methods of the same object, a method of a base class that calls another method defined in the same base class may end up calling a method of a derived class that overrides it. (For C++ programmers: all methods in Python are effectively virtual.)

`isinstance()`, `issubclass()`

Multiple inheritence: For most purposes, in the simplest cases, you can think of the search for attributes inherited from a parent class as depth-first, left-to-right, not searching twice in the same class where there is an overlap in the hierarchy.

private variables: e.g. `_spam`
name mangling: e.g. `__update`

