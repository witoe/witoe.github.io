"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[6153],{2507:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-cdf71c64",path:"/javascript/object_prototype.html",title:"Object Prototype",lang:"en-US",frontmatter:{title:"Object Prototype"},excerpt:"",headers:[{level:2,title:"Object",slug:"object",children:[]},{level:2,title:"Usage of this",slug:"usage-of-this",children:[]},{level:2,title:"Prototypal inheritance",slug:"prototypal-inheritance",children:[]}],filePathRelative:"javascript/object_prototype.md",git:{updatedTime:163774408e4,contributors:[{name:"guyong",email:"jcel@qq.com",commits:1}]}}},2174:(n,s,a)=>{a.r(s),a.d(s,{default:()=>w});var t=a(6252);const e=(0,t.uE)('<h1 id="object-oriented" tabindex="-1"><a class="header-anchor" href="#object-oriented" aria-hidden="true">#</a> Object oriented</h1><p>object 一词有很多意义，一般任意的“东西”都可以称为对象，但有时又有特殊的含义。这里我们用<code>object</code>专指javascript中类型为<code>Object</code>的对象，而用 object 表示普通意义下的对象。</p><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h2><p>Every variable can be <em>used as</em> (but not is) an <code>object</code>, except for <strong>undefined</strong> and <strong>null</strong> . Even number literal has its dot operation if the dot is not parsed as float point.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">2.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError</span>\n<span class="token number">2.</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// valid</span>\n<span class="token number">2</span> <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// valid</span>\n<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//valid</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>However, javascript distinguish <code>Object</code> data types (including function object and array object) from primary data types (Number, String, ...)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\na<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//invalid, a.x is undifiend</span>\n<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nb<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//valid</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\nfoo<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//valid</span>\n<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\nc<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//valid</span>\n<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">;</span>\ns<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//invalid</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>object</strong> can be used as hash tables. A property can be accessed in two ways: dot operation and [] operation. They are equivalent, except that [] operation can be used in following two cases while dot operation can&#39;t:</p><ul><li>set property dynamiclly</li><li>property name is a not valid variable name</li></ul><p>Objects created using {} are inherited form Object.prototype. A property can only be deleted using <code>delete</code> operation</p><h2 id="usage-of-this" tabindex="-1"><a class="header-anchor" href="#usage-of-this" aria-hidden="true">#</a> Usage of this</h2><p><em>this</em> can only be used inside of function, it always refers to the caller of this function.</p><p><em>this</em> may refers to <em>global</em></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n　　<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><em>this</em> in constructor function</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n　　<span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2　　</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><em>this</em> in bound function: apply, call</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n　　<span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\no<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\no<span class="token punctuation">.</span>m <span class="token operator">=</span> test<span class="token punctuation">;</span>\no<span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0</span>\no<span class="token punctuation">.</span><span class="token function">m</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="prototypal-inheritance" tabindex="-1"><a class="header-anchor" href="#prototypal-inheritance" aria-hidden="true">#</a> Prototypal inheritance</h2><p>Most Javascript implementations use <code>__proto__</code> property to represent the next object in the prototype chain. We need to distinguish <code>__proto__</code> from <code>prototype</code></p><p>Every <code>object</code> (include function object) has an implicit <code>__proto__</code> property. It is this property that implements prototype chain.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span>\n\n  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__ <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token function">getProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>\n\n  <span class="token keyword">else</span>\n    <span class="token keyword">return</span> <span class="token keyword">undefined</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>Note: The <code>in</code>, <code>for in</code> operations will search upward the prototype chain, use <code>hasOwnProperty</code> as filter if needed.</p></blockquote><p>Every constructor function has a property <em>prototype</em>, which is an empty object by default. If variable <em>x</em> is constructed (using <strong>new</strong>) by function <em>F</em>, then <code>x.__proto__ === F.prototype</code> Here is how <strong>new</strong> works:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">New</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">F</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&#39;__proto__&#39;</span><span class="token operator">:</span> f<span class="token punctuation">.</span>prototype <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token constant">F</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> n<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="/assets/js-object_oriented_1.png" alt="js-object_oriented_1"> 3. <code>x = new f()</code> doesn&#39;t implement &quot;x inherits another object&quot;. However, Douglas Crockford found a way to exploit the new operator to do real Prototypal Inheritance! <code>js Object.create = function (parent) { function F() {} F.prototype = parent; return new F(); }; </code> 4. Instance object (object that is not function) don&#39;t have <em>prototype</em> (undefined). This <em>prototype</em> has a <em>constructor</em> property. Whenever a constructor&#39;s <em>prototype</em> is manually modified, its constructor should be maintained properly. ( to ensure the correctness of operations like <code>this.constructor.prototype.constructor.prototype</code> and <code>instance of</code>) ```js function Animal() {　　　　 this.species = &quot;动物&quot;;　　 }</p><pre><code>function Cat(name, color) {　　　　\n  this.name = name;　　　　\n  this.color = color;　　\n}\nCat.prototype = new Animal();\nCat.prototype.constructor = Cat;\nvar cat1 = new Cat(&quot;大毛&quot;,&quot;黄色&quot;);\nalert(cat1.species); // 动物\n```\nThe code above implement that &quot;Cat inherit Animal&quot;, which is actually &quot;cat1 inherits new Animal()&quot;\n\n&gt;* Not standard: *\\_\\_proto__* is non-standard and even deprecated. Also native Object.create and Douglas Crockford implementation are not exactly equivalent.\n&gt;* Not optimized: Object.create (native or custom) has not yet been as heavily optimized as the new construction. It can be up to 10 times slower.\n</code></pre><ol start="5"><li>class inheritance The class keyword is introduced in ES6, but is syntactical sugar, JavaScript remains prototype-based</li></ol>',28),p=(0,t.Uk)("References: "),o={href:"http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Javascript – How Prototypal Inheritance really works"),r=(0,t.Uk)(" (by vjeux) "),l={href:"http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("原型继承"),u=(0,t.Uk)(" (by 廖雪峰) "),k={href:"http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("Javascript继承机制的设计思想"),b=(0,t.Uk)(" (by 阮一锋) "),m={href:"http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("Javascript面向对象编程（二）：构造函数的继承"),y=(0,t.Uk)(" (by 阮一锋) "),f={href:"http://javascript.info/tutorial/inheritance",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("Prototypal inheritance"),g={},w=(0,a(3744).Z)(g,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[p,(0,t._)("a",o,[c,(0,t.Wm)(a)]),r,(0,t._)("a",l,[i,(0,t.Wm)(a)]),u,(0,t._)("a",k,[d,(0,t.Wm)(a)]),b,(0,t._)("a",m,[h,(0,t.Wm)(a)]),y,(0,t._)("a",f,[v,(0,t.Wm)(a)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);