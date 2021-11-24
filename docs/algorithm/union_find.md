# Disjoint Set Data Structure: Union-Find
## The problem
We want to maintain a set of disjoint sets, in which elements are fixed. Only union is supported, while spliting is not. Sepcifically, we support following three operations.
* MakeSet(u)
* Find(u)
* Union(u,v)

Let $V$ donote the fixed set of elements, whose size is $n$. Generally, we want to estimate the total time of a sequence of $m$ operations, in which the first $n$ operation is **MakeSet** for each element. 

## Linked-list
We can represent each set by a linked list, with each element additionally pointing to its head.
The worst-case time for **Union** is $O(n)$, and we can find a sequence of $m$ operations which needs $O(n^2)$ time in total.
### a weighted-union heuristic
We can improve it by a little trick. In the **Union** operation, we can rename the small set (say B) to the larger set (say A), i.e. make all the elements of B point to the head of A. The worst-case time of **Union** is stilll $O(n)$, while its amortized time becomes $O(\log n)$.

|       | worst-case | amortized |
|-------|:----------:|:-----------:|
|MakeSet|$O(1)$|$O(1)$|
|Find   |$O(1)$|$O(1)$|
|Union  |$O(n)$|$O(\log n)$|
|Total  |$O(m\log n)$|-|

## Forest
Wite rooted trees, **Union** costs $O(1)$, while **Find** may cost **O(n)** in worst-case. It can also be improved to $O(\log n)$ using the same weighted-union heuristic: Union-by-rank. Actually, Union-by-size works as well. The total time is also $O(m\log n)$
Using another heuristic "path compression", we can amortize the time of **Find** and **Union** to $O(\alpha(n))$, which results $O(m\alpha(n))$ time in total.

|       |   no heuristic| weighted-union| both(amortized) |
|-------|:----------:|:-----------:|:--------:|
|MakeSet|$O(1)$      | $O(1)$ | $O(1)$ |
|Find   |$O(n)$      |$O(\log n)$|$O(\alpha(n))$|
|Union  |$O(1)$      |$O(1)$|$O(\alpha(n))$|
|Total  |$O(mn)$     |$O(m\log n)$|$O(m\alpha(n))$||