### Minimum Height Trees(MHTs)

Given a tree T, find all the roots that make the minimum height.

* solution 1
 Find any longest path, its *middle point(s)*{.b} is the answer.
 Finding a longest path can be solved in $O(n)$ time by tree dp, or simply *2 tree travesal*{.b}.
 
* solution 2
 Use direct dp, let `dp[i]` be the height of the tree when the tree root is `i`, compute `dp[0],...,dp[n - 1]` by tree dp in a dfs manner.
 In dfs, when we reach node u, let T be the subtree by removing all u's descendants. We also maintain a variable acc that keeps track of the length of the longest path in T with u being on end. Then we have `dp[u] = max(height[u], acc)`.
 In dfs, when we move from u to its child v, then `newAcc = max(acc + 1, height[v']+2)` for all other child `v'` of `u`. We can compute it in $O(1)$ time by maintaining two heights of each node `u`, one is the conventional height, the other is the height after removing the branch w.r.t. the convention height.
* solution 3
 Iterately prune leaves. Use `Set` to denote the adjancency, compute the answer in O(n) time.
 [Leetcode solution 1 and 2](https://leetcode.com/problems/minimum-height-trees/discuss/76052)
 [Leetcode solution 3](https://leetcode.com/problems/minimum-height-trees/discuss/76055)
 
Graph Algorithm (4+3+3+5 = 15 algs)
1. Elementary
   * BFS
   * DFS
   * Topological Sort
   * SCC
2. MST
   * Generic-MST
   * Kruskal
   * Prim
3. SSSP
   * Bellman-Ford
   * SSSP-DAG
   * Dijkstra
4. APSP
   * Slow-Matrix-Mulplication
   * Faster-Matrix-Mulplication
   * Floyd-Warshall
   * Transitive Clousure
   * Johnson