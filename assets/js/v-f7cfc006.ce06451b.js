"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[9271],{1903:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-f7cfc006",path:"/javascript/js-TDG.html",title:"Notes for Javascript-the Definitive Guide",lang:"en-US",frontmatter:{title:"Notes for Javascript-the Definitive Guide"},excerpt:"",headers:[{level:2,title:"Array and object initializers",slug:"array-and-object-initializers",children:[]},{level:2,title:"Function definition expressions (function expression vs. function statement)",slug:"function-definition-expressions-function-expression-vs-function-statement",children:[]},{level:2,title:"Object creation expressions",slug:"object-creation-expressions",children:[]},{level:2,title:"Operators",slug:"operators",children:[]},{level:2,title:"Assignment expressions",slug:"assignment-expressions",children:[]},{level:2,title:"Other operators",slug:"other-operators",children:[]},{level:2,title:"Creating Objects",slug:"creating-objects",children:[]},{level:2,title:"Querying and Setting Properties",slug:"querying-and-setting-properties",children:[]},{level:2,title:"Creating Arrays",slug:"creating-arrays",children:[]},{level:2,title:"Reading and Writing Array Elements",slug:"reading-and-writing-array-elements",children:[]},{level:2,title:"Sparse Arrays",slug:"sparse-arrays",children:[]},{level:2,title:"Adding and Deleting Array Elements",slug:"adding-and-deleting-array-elements",children:[]},{level:2,title:"Iterating Arrays",slug:"iterating-arrays",children:[]},{level:2,title:"Array Methods",slug:"array-methods",children:[]}],filePathRelative:"javascript/js-TDG.md",git:{updatedTime:163832357e4,contributors:[{name:"guyong",email:"jcel@qq.com",commits:2},{name:"Yong Gu",email:"dujcel@icloud.com",commits:1}]}}},298:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const n=(0,a(6252).uE)('<p>An ordinary JavaScript object is an unordered collection of named values. Special kinds of object: array, function, class. Other kinds of object: RegExp, typed array, set, map, Date, Error.</p><p>Functions and classes are not just part of the language syntax: they are themselves values that can be manipulated by JavaScript programs.</p><p>Automatic GC.</p><p>Technically, it is only objects that have methods. But numbers, strings, boolean, and symbol values behave as if they have methods. In JavaScript, <code>null</code> and <code>undefined</code> are the only values that methods cannot be invoked on.</p><p>JavaScript liberally converts values from one type to another. ES2016 add <code>**</code> for exponentiation.</p><p><code>Math</code> object, negative zero, <code>Infinity</code>, <code>NaN</code></p><p>comparison table</p><p>binary floating-point, rounding errors</p><p>BigInt</p><p>JavaScript do not allow mixed operands to the arithmetic operators.</p><p>string is 16-bit values, js uses utf-16 encoding. most string-manipulation methods defined by JS operate on 16-bit values, not characters. However, in ES6, strings are iterables, actual characters are iterated.</p><p>single quotes, double quotes, backticks (interpolatation), new line, escape.</p><p>JS code may contain strings of HTML code, and HTML code may contain strings of JS code.</p><p>template literals, tagged template literals</p><p>any JS value can be converted to a boolean value. <code>undefined</code>, <code>null</code>, <code>0</code>, <code>-0</code>, <code>NaN</code>, <code>&quot;&quot;</code> convert to false, all other values convert to true.</p><p><code>undefined</code> is a predefined global constant, it represents a deeper kind of absence than <code>null</code>, it can be:</p><ul><li>the value of variables that have not been initialized</li><li>the value you get when you query the value of an object property or array element that does not exist</li><li>the return value of functions that do not explicitly return a value</li><li>the value of function parameters for which no argument is passed</li></ul><p>Despite these differences, <code>null</code> and <code>undefined</code> both indicate an absence of value and can often be used interchangeably. The euqality operator <code>==</code> considers them to be equal.</p><p>When ES6 introduced the <code>for/of</code> loop and iterable objects, it needed to define standard methods that classes could implement to make themselves iterable. But standarding any particular string name for this iterator method would have broken existing code, so a symbolic name was used instead.</p><p>The global object, window, self, globalThis</p><p>Primitives are compared by value. Objects are not compared by value, they are compared by <em>reference</em>: two object values are the same if and only if they refer to the same underlying object.</p><blockquote><p>Here &#39;compare&#39; means <code>===</code></p></blockquote><table><thead><tr><th>Value</th><th>to String</th><th>to Number</th><th>to Boolean</th></tr></thead><tbody><tr><td>undefined</td><td>&quot;undefined&quot;</td><td>NaN</td><td>false</td></tr><tr><td>null</td><td>&quot;null&quot;</td><td>0</td><td>false</td></tr><tr><td>true</td><td>&quot;true&quot;</td><td>1</td><td></td></tr><tr><td>false</td><td>&quot;false&quot;</td><td>0</td><td></td></tr><tr><td>&quot;&quot;</td><td></td><td>0</td><td>false</td></tr><tr><td>&quot;1.2&quot;</td><td></td><td>1.2</td><td>true</td></tr><tr><td>&quot;one&quot;</td><td></td><td>NaN</td><td>true</td></tr><tr><td>0</td><td>&quot;0&quot;</td><td></td><td>false</td></tr><tr><td>-0</td><td>&quot;0&quot;</td><td></td><td>false</td></tr><tr><td>1</td><td>&quot;1&quot;</td><td></td><td>true</td></tr><tr><td>Infinity</td><td>&quot;Infinity&quot;</td><td></td><td>true</td></tr><tr><td>-Infinity</td><td>&quot;-Infinity&quot;</td><td></td><td>true</td></tr><tr><td>NaN</td><td>&quot;NaN&quot;</td><td></td><td>false</td></tr><tr><td>Infinity</td><td>&quot;Infinity&quot;</td><td></td><td>true</td></tr><tr><td>{}(any object)}</td><td>*</td><td>*</td><td>true</td></tr><tr><td>[]</td><td>&quot;&quot;</td><td>0</td><td>true</td></tr><tr><td>[9] (one numeric element)</td><td>&quot;9&quot;</td><td>9</td><td>true</td></tr><tr><td>{&#39;a&#39;} (any other array)</td><td>use join method</td><td>NaN</td><td>true</td></tr><tr><td>function(){} (any function)</td><td>*</td><td>NaN</td><td>true</td></tr></tbody></table><p>Convertibility of one value to another does not imply equality (==) of those two values.</p><p>Explicit conversion: Boolean(), Number(), String() functions. If they are used with <code>new</code>, i.e. as constructor, you&#39;l get a &quot;wrapper&quot; object (falsy) that behaves just like a primitive boolean, number or string value. There wrapper objects are a historical leftover from the earilies days of JS, and there is never really any good reason to use them.</p><p>Certain operators perform implicit type conversions:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>x <span class="token operator">+</span> <span class="token string">&quot;&quot;</span>  <span class="token comment">// String(x)</span>\n<span class="token operator">+</span>x   <span class="token comment">//  Number(x)</span>\nx<span class="token operator">-</span><span class="token number">0</span>  <span class="token comment">// Number(x)</span>\n<span class="token operator">!</span><span class="token operator">!</span>x  <span class="token comment">// Boolean(x)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>toString([base]), parseInt, parseFloat toString(), valueOf()</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> datum <span class="token keyword">of</span> data<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>datum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>const during one loop</p><p>variables and constants declared as part of a <code>for, for/in, for/of</code> loop have the loop body as their scope, even though they technically appear outside of the curly braces.</p><p>In Node and in client-side JS modules, the scope of a global variable is the file that it is defined in. In traditional client-side JS, however, the scope of a blobal variable is the HTML docuement in which it is defined.</p><p>deconstructring assignment, three dots</p><h1 id="expressions-and-operators" tabindex="-1"><a class="header-anchor" href="#expressions-and-operators" aria-hidden="true">#</a> Expressions and Operators</h1><p>An expression is a phrase of JavaScript that can be evaluated to produce a value.</p><p>Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references.</p><p>When any identifier appears by itself in a program, JavaScript assumes it is a variable or constant or property of the global object and looks up its value.</p><h2 id="array-and-object-initializers" tabindex="-1"><a class="header-anchor" href="#array-and-object-initializers" aria-hidden="true">#</a> Array and object initializers</h2><h2 id="function-definition-expressions-function-expression-vs-function-statement" tabindex="-1"><a class="header-anchor" href="#function-definition-expressions-function-expression-vs-function-statement" aria-hidden="true">#</a> Function definition expressions (function expression vs. function statement)</h2><p>Property access expression With either type of property access expression, the expression before the . or [ is first evaluated. If the value is null or undefined, the expression throws a TypeError, since these are the two JavaScript values that cannot have properties. If the object expression is followed by a dot and an identifier, the value of the property named by that identifier is looked up and becomes the overall value of the expression. If the object expression is followed by another expression in square brackets, that second expression is evaluated and converted to a string. The overall value of the expression is then the value of the property named by that string. In either case, if the named property does not exist, then the value of the property access expression is undefined.</p><p>In JavaScript, the values null and undefined are the only two values that do not have properties.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>expression<span class="token operator">?.</span>identifier\nexpression<span class="token operator">?.</span><span class="token punctuation">[</span>expression<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>let a = { b: null }; a.b?.c.d // =&gt; undefined (short-curciting)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## Function invocation expressions\nNote, however, that ?.() only checks whether the lefthand side is null or undefined.\nIt does not verify that the value is actually a function.\n```js\nlet f = null, x = 0;\ntry {\nf(x++); // Throws TypeError because f is null\n} catch(e) {\nx // =&gt; 1: x gets incremented before the exception is thrown\n}\nf?.(x++) // =&gt; undefined: f is null, but no exception thrown\nx // =&gt; 1: increment is skipped because of short-circuiting\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="object-creation-expressions" tabindex="-1"><a class="header-anchor" href="#object-creation-expressions" aria-hidden="true">#</a> Object creation expressions</h2><h2 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h2><p>In JavaScript, variables, properties of objects, and elements of arrays are lvalues.</p><p>JavaScript always evaluates expressions in strictly left-toright order.</p><p>An object is equal to itself, but not to any other object.</p><h2 id="assignment-expressions" tabindex="-1"><a class="header-anchor" href="#assignment-expressions" aria-hidden="true">#</a> Assignment expressions</h2><p>The value of an assignment expression is the value of the right-side operand.</p><p>The two cases will differ only if a includes side effects such as a function call or an increment operator.</p><h2 id="other-operators" tabindex="-1"><a class="header-anchor" href="#other-operators" aria-hidden="true">#</a> Other operators</h2><p>delete expects its operand to be an lvalue. If it is not an lvalue, the operator takes no action and returns true. Otherwise, delete attempts to delete the specified lvalue. delete returns true if it successfully deletes the specified lvalue.</p><p>The comma operator is a binary operator whose operands may be of any type. It evaluates its left operand, evaluates its right operand, and then returns the value of the right operand.</p><h1 id="statements" tabindex="-1"><a class="header-anchor" href="#statements" aria-hidden="true">#</a> Statements</h1><p>When a switch executes, it computes the value of expression and then looks for a case label whose expression evaluates to the same value (where sameness is determined by the === operator).</p><p>The fact that the case expressions are evaluated at runtime makes the JavaScript switch statement much different from (and less efficient than) the switch statement of C, C++, and Java. In those languages, the case expressions must be compile-time constants of the same type, and switch statements can often compile down to highly efficient jump tables.</p><p>if none of the case expressions match the switch expression, the switch statement begins executing its body at the statement labeled default:. If there is no default: label, the switch statement skips its body altogether.</p><p>Arrays are iterated “live”—changes made during the iteration may affect the outcome of the iteration.</p><p>Note also that this iteration of the keys of an object is not live as the array example above was—changes to the object o made in the loop body will have no effect on the iteration.</p><p>break and continue are the only JavaScript statements that use statement labels; The namespace for labels is different than the namespace for variables and functions, so you can use the same identifier as a statement label and as a variable or function name.</p><p>When a program runs, it is the program’s expressions that are being evaluated and the program’s statements that are being executed. The declarations in a program don’t “run” in the same way: instead, they define the structure of the program itself. Loosely, you can think of declarations as the parts of the program that are processed before the code starts running.</p><h1 id="objects" tabindex="-1"><a class="header-anchor" href="#objects" aria-hidden="true">#</a> Objects</h1><p>An object is an unordered collection of properties, each of which has a name and a value. Property names are usually strings (although, as we’ll see in §6.10.3, property names can also be Symbols), so we can say that objects map strings to values.</p><p>In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its “prototype.”</p><p>objects are mutable and manipulated by reference rather than by value.</p><p>The most common things to do with objects are to create them and set, query, delete, test, and enumerate their properties. A property has a name and a value. A property name may be any string, including the empty string (or any Symbol), but no object may have two properties with the same name. The value may be any JavaScript value, or it may be a getter or setter function (or both).</p><p>three property attributes:</p><h2 id="creating-objects" tabindex="-1"><a class="header-anchor" href="#creating-objects" aria-hidden="true">#</a> Creating Objects</h2><p>object literals</p><p>new Object();</p><p>Almost every JavaScript object has a second JavaScript object associated with it. This second object is known as a prototype, and the first object inherits properties from the prototype.</p><p>Objects created using the <code>new</code> keyword and a constructor invocation use the value of the prototype property of the constructor function as their prototype. So the object created by new Object() inherits from <code>Object.prototype</code>, just as the object created by <code>{}</code> does. Remember: almost all objects have a prototype, but only a relatively small number of objects have a prototype property. It is these objects with prototype properties that define the prototypes for all the other objects.</p><p>prototype chain</p><p><code>Object.create()</code></p><h2 id="querying-and-setting-properties" tabindex="-1"><a class="header-anchor" href="#querying-and-setting-properties" aria-hidden="true">#</a> Querying and Setting Properties</h2><p>Property assignment examines the prototype chain only to determine whether the assignment is allowed.</p><p>There is one exception to the rule that a property assignment either fails or creates or sets a property in the original object. If o inherits the property x, and that property is an accessor property with a setter method (see §6.10.6), then that setter method is called rather than creating a new property x in o. Note, however, that the setter method is called on the object o, not on the prototype object.</p><p><code>Object.assign()</code></p><p>The <code>valueOf()</code> method is much like the toString() method, but it is called when JavaScript needs to convert an object to some primitive type other than a string—typically, a number.</p><p>Note that this ... syntax is often called a spread operator but is not a true JavaScript operator in any sense.</p><p>data property vs. accessor property</p><h1 id="arrays" tabindex="-1"><a class="header-anchor" href="#arrays" aria-hidden="true">#</a> Arrays</h1><p>An array is an ordered collection of values. It is a specialized form of object.</p><ul><li>It is untyped</li><li>It is dynamic</li><li>It may be sparse</li><li>It is zero-based and uses 32-bit indexes</li></ul><p><code>Array.prototype</code></p><p><strong>Array-like</strong> objects are non-array objects that have a numeric length property and have values stored with properties whose names happen to be integers. When</p><p>typed arrays</p><h2 id="creating-arrays" tabindex="-1"><a class="header-anchor" href="#creating-arrays" aria-hidden="true">#</a> Creating Arrays</h2><p>literal</p><p>spread operator</p><p>new Array()</p><p>Array.of()</p><p>Array.from()</p><h2 id="reading-and-writing-array-elements" tabindex="-1"><a class="header-anchor" href="#reading-and-writing-array-elements" aria-hidden="true">#</a> Reading and Writing Array Elements</h2><p>JavaScript converts the numeric array index you specify to a string—the index 1 becomes the string &quot;1&quot;—then uses that string as a property name.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Create a plain object</span>\no<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">;</span> <span class="token comment">// Index it with an integer</span>\no<span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span> <span class="token comment">// =&gt; &quot;one&quot;; numeric and string property names are the same</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>It is helpful to clearly distinguish an array index from an object property name. All indexes are property names, but only property names that are integers between 0 and 232–2 are indexes.</p><p>Note that you can index an array using numbers that are negative or that are not integers. When you do this, the number is converted to a string, and that string is used as the property name. Since the name is not a non-negative integer, it is treated as a regular object property, not an array index. Also, if you index an array with a string that happens to be a non-negative integer, it behaves as an array index, not an object property. The same is true if you use a floating-point number that is the same as an integer:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1.23</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// This creates a property named &quot;-1.23&quot;</span>\na<span class="token punctuation">[</span><span class="token string">&quot;1000&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// This the 1001st element of the array</span>\na<span class="token punctuation">[</span><span class="token number">1.000</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// Array index 1. Same as a[1] = 1;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The fact that array indexes are simply a special type of object property name means that JavaScript arrays have no notion of an “out of bounds” error. When you try to query a nonexistent property of any object, you don’t get an error; you simply get undefined.</p><h2 id="sparse-arrays" tabindex="-1"><a class="header-anchor" href="#sparse-arrays" aria-hidden="true">#</a> Sparse Arrays</h2><p>Arrays that are sufficiently sparse are typically implemented in a slower, more memory-efficient way than dense arrays are, and looking up elements in such an array will take about as much time as regular object property lookup.</p><p>Every array has a length property, and it is this property that makes arrays different from regular JavaScript objects. That length is guaranteed to be larger than the index of every element in the array. In order to maintain this invariant, arrays have two special behaviors. The first we described above: if you assign a value to an array element whose index i is greater than or equal to the array’s current length, the value of the length property is set to i+1. The second special behavior that arrays implement in order to maintain the length invariant is that, if you set the length property to a non-negative integer n smaller than its current value, any array elements whose index is greater than or equal to n are deleted from the array.</p><h2 id="adding-and-deleting-array-elements" tabindex="-1"><a class="header-anchor" href="#adding-and-deleting-array-elements" aria-hidden="true">#</a> Adding and Deleting Array Elements</h2><p>push, pop, shift, unshift, splice</p><p>delete</p><p>Deleting an array element is similar to (but subtly different than) assigning unde fined to that element.</p><h2 id="iterating-arrays" tabindex="-1"><a class="header-anchor" href="#iterating-arrays" aria-hidden="true">#</a> Iterating Arrays</h2><p>entries()</p><p>forEach</p><h2 id="array-methods" tabindex="-1"><a class="header-anchor" href="#array-methods" aria-hidden="true">#</a> Array Methods</h2><p>Note that filter() skips missing elements in sparse arrays and that its return value is always dense. To close the gaps in a sparse array, you can do this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> dense <span class="token operator">=</span> sparse<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>And to close gaps and remove undefined and null elements, you can use filter, like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>Missing elements are not elements whose value are undefined !</p></blockquote><h1 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h1><p>One of the important things to understand about function declarations is that the name of the function becomes a variable whose value is the function itself.</p><p>Function declaration statements are “hoisted” to the top of the enclosing script, function, or block so that functions defined in this way may be invoked from code that appears before the definition.</p>',121),s={},r=(0,a(3744).Z)(s,[["render",function(e,t){return n}]])},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,n]of t)a[e]=n;return a}}}]);