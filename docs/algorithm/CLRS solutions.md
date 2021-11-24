# CLRS Solutions

### 24.3-4
First check wheter $(d,\pi)$ compose an **$s$-rooted tree**.(i.e. they satisfy properties 1 and 2 in page 647.) Then check that $d(s)=0$ and for all $v\in V$, $d(v) = \min_{u\in N(v)}\{d(u)+w(u,v)\}$ and $\pi(v)$ is the minimizer, where $N(v) = \{u\in V\ |\ (u,v)\in E\}$. If all are true, return true, otherwise return false. It can be easily seen that the total time is $O(m+n)$.

Now to prove the correctness. For one direction, if $(d,\pi)$ match one **shortest-paths tree**, our algorithm must output true. For the other direction, suppose $(d,\pi)$ doesn't match any such tree and the algorithm output true. Suppose $T'=(\pi',\delta)$ is a **shortest-paths tree**. For all incorrect vertex $v$, we must have $d(v)>\delta(v)$ since we can really find a path of length $d(v)$ from $s$ to $v$ according to $\pi$.
There must be at least one incorrect vertex. Let $v$ be an incorrect vertex closest to $s$ in $T'$. Then $u_1=\pi(v)$ and $u_2 = \pi'(v)$ exist since $v$ can not be $s$. Therefore we have $d(u_1)+w(u_1,v)=d(v)>\delta(v)=d(u_2)+w(u_2,v)$ since $u_2$ is correct, which contradicts the fact that $u_1$ is the minimizer of $d(u)+w(u,v)$.

> It seems that this algorithm works for negative edges, doesn't it?

