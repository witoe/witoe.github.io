"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[8941],{5892:(e,n,t)=>{t.r(n),t.d(n,{data:()=>s});const s={key:"v-496edbe3",path:"/python/notes_for_learning_python/3_Statements-and-Syntax.html",title:"Statements and Syntax",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Assignments, Expressions, and Prints",slug:"assignments-expressions-and-prints",children:[{level:3,title:"Naming",slug:"naming",children:[]},{level:3,title:"Expression Statements",slug:"expression-statements",children:[]}]},{level:2,title:"if Tests and Syntax Rules",slug:"if-tests-and-syntax-rules",children:[]},{level:2,title:"while and for Loops",slug:"while-and-for-loops",children:[]},{level:2,title:"Iterations and Comprehensions",slug:"iterations-and-comprehensions",children:[]},{level:2,title:"Documentation Interlude",slug:"documentation-interlude",children:[]}],filePathRelative:"python/notes_for_learning_python/3_Statements-and-Syntax.md",git:{updatedTime:163774408e4,contributors:[{name:"guyong",email:"jcel@qq.com",commits:1}]}}},8211:(e,n,t)=>{t.r(n),t.d(n,{default:()=>be});var s=t(6252),a=t(269);const l=(0,s._)("h1",{id:"statements-and-syntax",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#statements-and-syntax","aria-hidden":"true"},"#"),(0,s.Uk)(" Statements and Syntax")],-1),i=(0,s._)("h2",{id:"assignments-expressions-and-prints",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#assignments-expressions-and-prints","aria-hidden":"true"},"#"),(0,s.Uk)(" Assignments, Expressions, and Prints")],-1),r=(0,s._)("ul",null,[(0,s._)("li",null,"Assignments create object references. (i.e. link a name with an object) They always create references to objects instead of copying the objects."),(0,s._)("li",null,"Names are created when first assigned."),(0,s._)("li",null,"Names must be assigned before referenced.")],-1),o=(0,s._)("p",null,"Module imports, function and class definitions, for loop variables, and function arguments are all implicit assignments.",-1),u=(0,s._)("p",null,[(0,s._)("img",{src:a,alt:"Table 11-1"})],-1),c=(0,s._)("p",null,"sequence assignment—any sequence of names can be assigned to any sequence of values, and Python assigns the items one at a time by position. In fact, the original tuple and list assignment forms in Python have been generalized to accept any type of sequence (really, iterable) on the right as long as it is of the same length as the sequence on the left.",-1),h=(0,s._)("p",null,"Multiple-target assignment: Python assigns a reference to the same object (the object farthest to the right) to all the targets on the left.",-1),d=(0,s._)("p",null,"In tuple/list assignment, Python creates a temporary tuple that saves the original values of the variables on the right before assigning.",-1),p=(0,s._)("p",null,"we can even assign nested sequences, and Python unpacks their parts according to their shape, as expected. The sequence-nesting shape of the object on the left must match that of the object on the right.",-1),m=(0,s._)("blockquote",null,[(0,s._)("p",null,"This nested tuple (really, sequence) unpacking assignment form works for function argument lists in Python 2.X (though not in 3.X)")],-1),_=(0,s._)("p",null,"In short, a single starred name, *X, can be used in the assignment target in order to specify a more general matching against the sequence—the starred name is assigned a list, which collects all items in the sequence not assigned to other names. In fact, the starred name can appear anywhere in the target.",-1),g=(0,s._)("blockquote",null,[(0,s._)("p",null,"This is similar in spirit to slicing, but not exactly the same—a sequence unpacking assignment always returns a list for multiple matched items, whereas slicing returns a sequence of the same type as the object sliced")],-1),b=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,">>> a, *b = 'spam'\n>>> a, b\n('s', ['p', 'a', 'm'])\n>>> S[0], S[1:] # Slices are type-specific, * assignment always returns a list\n('s', 'pam')\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br")])],-1),f=(0,s._)("p",null,"Finally, errors can still be triggered if there is more than one starred name, if there are too few values and no star (as before), and if the starred name is not itself coded inside a sequence:",-1),y=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,">>> *a = seq\nSyntaxError: starred assignment target must be in a list or tuple\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br")])],-1),x=(0,s._)("p",null,"For augmented assignments, inplace operations may be applied for mutable objects as an optimization.",-1),v=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,">>> L = [1, 2]\n>>> L = L + [3] # Concatenate: slower\n>>> L\n[1, 2, 3]\n>>> L.append(4) # Faster, but in place\n>>> L\n[1, 2, 3, 4]\n>>> L += [9, 10] # Mapped to L.extend([9, 10])\n>>> L\n[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"7"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"8"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"9"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"10"),(0,s._)("br")])],-1),w=(0,s._)("p",null,"Note however, that because of this equivalence += for a list is not exactly the same as a + and = in all cases—for lists += allows arbitrary sequences (just like extend), but concatenation normally does not:",-1),k=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,">>> L = []\n>>> L += 'spam' # += and extend allow any sequence, but + does not!\n>>> L\n['s', 'p', 'a', 'm']\n>>> L = L + 'spam'\nTypeError: can only concatenate list (not \"str\") to list\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br")])],-1),U=(0,s._)("blockquote",null,[(0,s._)("p",null,"Although Python now supports statements like X += Y, it still does not have C’s auto-increment/decrement operators (e.g., X++, −−X).")],-1),q=(0,s._)("h3",{id:"naming",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#naming","aria-hidden":"true"},"#"),(0,s.Uk)(" Naming")],-1),j=(0,s._)("p",null,"For portability, case also matters in the names of imported module files, even on platforms where the filesystems are case-insensitive.",-1),P=(0,s._)("p",null,"True, False, and None, are somewhat unusual in meaning—they also appear in the built-in scope of Python described in Chapter 17, and they are technically names assigned to objects.",-1),L=(0,s._)("p",null,"Names that begin with a single underscore (_X) are not imported by a from module import * statement",-1),S=(0,s._)("p",null,"Names that begin with two underscores and do not end with two more (__X) are localized (“mangled”) to enclosing classes.",-1),X=(0,s._)("h3",{id:"expression-statements",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#expression-statements","aria-hidden":"true"},"#"),(0,s.Uk)(" Expression Statements")],-1),T=(0,s._)("p",null,"In Python, you can use an expression as a statement, too. Expressions are commonly used as statements in two situations:",-1),I=(0,s._)("ul",null,[(0,s._)("li",null,"For calls to functions and methods"),(0,s._)("li",null,"For printing values at the interactive prompt")],-1),N=(0,s._)("p",null,"A statement that is not an expression must generally appear on a line all by itself, not nested in a larger syntactic structure. For example, Python doesn’t allow you to embed assignment statements (=) in other expressions. Besides, C assignments return the value assigned, but Python assignments are just statements, not expressions.",-1),F=(0,s._)("p",null,"Expression statements are often used to run list methods that change a list in place:",-1),C=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,">>> L = L.append(4) # But append returns None, not L\n>>> print(L) # So we lose our list!\nNone\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br")])],-1),E=(0,s._)("p",null,"Normally, whether printed output is buffered in memory or not is determined by file; passing a true value to flush forcibly flushes the stream.",-1),B=(0,s._)("p",null,"Because the print statement just sends text to the sys.stdout.write method, you can capture printed text in your programs by assigning sys.stdout to an object whose write method processes the text in arbitrary ways",-1),z=(0,s._)("h2",{id:"if-tests-and-syntax-rules",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#if-tests-and-syntax-rules","aria-hidden":"true"},"#"),(0,s.Uk)(" if Tests and Syntax Rules")],-1),A=(0,s._)("p",null,"There is no switch or case statement in Python",-1),M=(0,s._)("ul",null,[(0,s._)("li",null,"Block and statement boundaries are detected automatically."),(0,s._)("li",null,"Compound statements = header + “:” + indented statements."),(0,s._)("li",null,"Blank lines, spaces, and comments are usually ignored."),(0,s._)("li",null,"Docstrings are ignored but are saved and displayed by tools.")],-1),D=(0,s._)("p",null,"Statements may span multiple lines if you’re continuing an open syntactic pair.",-1),Y=(0,s._)("p",null,[(0,s.Uk)("Boolean operators stop evaluating (“short circuit”) as soon as a result is known. Boolean "),(0,s._)("strong",null,"and"),(0,s.Uk)(" and "),(0,s._)("strong",null,"or"),(0,s.Uk)(" operators return a true or false object in Python, not the values True or False")],-1),Z=(0,s._)("p",null,[(0,s.Uk)("For "),(0,s._)("code",null,"A = Y if X else Z"),(0,s.Uk)(", Python runs expression Y only if X turns out to be true, and runs expression Z only if X turns out to be false.")],-1),R=(0,s._)("p",null,[(0,s.Uk)("When defining classes, we can specify their Boolean nature with either the "),(0,s._)("strong",null,"bool"),(0,s.Uk)(" or "),(0,s._)("strong",null,"len"),(0,s.Uk)(" methods.")],-1),H=(0,s._)("h2",{id:"while-and-for-loops",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#while-and-for-loops","aria-hidden":"true"},"#"),(0,s.Uk)(" while and for Loops")],-1),O=(0,s._)("p",null,[(0,s.Uk)("The optional "),(0,s._)("strong",null,"else"),(0,s.Uk)(" block run if didn't exit loop with "),(0,s._)("strong",null,"break")],-1),W=(0,s._)("p",null,'Python doesn’t have what some languages call a “do until” loop statement. Python has no "go to" statement.',-1),K=(0,s._)("p",null,"Python 3.X (but not 2.X) allows ellipses coded as ... (literally, three consecutive dots) to appear any place an expression can. Because ellipses do nothing by themselves, this can serve as an alternative to the pass statement,",-1),Q=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,">>> X = ... # Alternative to None\n>>> X\nEllipsis\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br")])],-1),G=(0,s._)("p",null,[(0,s.Uk)("After the "),(0,s._)("strong",null,"for"),(0,s.Uk)(" loop, this loop variable normally still refers to the last item visited, which is the last item in the sequence unless the loop exits with a break statement.")],-1),J=(0,s._)("p",null,"Even nested structures may be automatically unpacked this way in a for:",-1),V=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,">>> for ((a, b), c) in [((1, 2), 3), ((4, 5), 6)]: print(a, b, c)\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br")])],-1),$=(0,s._)("p",null,"In fact, as a general rule, you should resist the temptation to count things in Python—its iteration tools automate much of the work you do to loop over collections in lower-level languages like C.",-1),ee=(0,s._)("p",null,"built-in tools: range, zip, enumerate",-1),ne=(0,s._)("p",null,"The zip function is more general than this example suggests. For instance, it accepts any type of sequence (really, any iterable object, including files), and it accepts more than two arguments. Moreover, zip truncates result tuples at the length of the shortest sequence when the argument lengths differ.",-1),te=(0,s._)("h2",{id:"iterations-and-comprehensions",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#iterations-and-comprehensions","aria-hidden":"true"},"#"),(0,s.Uk)(" Iterations and Comprehensions")],-1),se=(0,s._)("ul",null,[(0,s._)("li",null,"Iterator vs. Iterable vs. Iteration tool/context"),(0,s._)("li",null,"Single scan vs. multiple scan")],-1),ae=(0,s._)("p",null,"In some cases these two objects are the same when only a single scan is supported (e.g., files), and the iterator object is often temporary, used internally by the iteration tool. Moreover, some objects are both an iteration context tool (they iterate) and an iterable object (their results are iterable)—including Chapter 20’s generator expressions, and map and zip in Python 3.X.",-1),le=(0,s._)("p",null,[(0,s.Uk)("When the for loop begins, it first obtains an iterator from the iterable object by passing it to the iter built-in function; the object returned by iter in turn has the required next method. The iter function internally runs the "),(0,s._)("strong",null,"iter"),(0,s.Uk)(" method, much like "),(0,s._)("code",null,"next"),(0,s.Uk)(" and "),(0,s._)("code",null,"__next__"),(0,s.Uk)(".")],-1),ie=(0,s._)("p",null,[(0,s.Uk)("For comprehensions, their full syntax allows for any number of "),(0,s._)("strong",null,"for"),(0,s.Uk)(" clauses, each of which can have an optional associated "),(0,s._)("strong",null,"if"),(0,s.Uk)(" clause.")],-1),re=(0,s._)("p",null,"Keep in mind, though, that every built-in tool that scans from left to right across objects uses the iteration protocol.",-1),oe=(0,s._)("p",null,"Notice that, unlike map and others, sorted returns an actual list in Python 3.X instead of an iterable.",-1),ue=(0,s._)("p",null,"One of the fundamental distinctions of Python 3.X is its stronger emphasis on iterators than 2.X. This, along with its Unicode model and mandated new-style classes, is one of 3.X’s most sweeping changes.",-1),ce=(0,s._)("p",null,[(0,s.Uk)("Unlike "),(0,s._)("strong",null,"range"),(0,s.Uk)(", "),(0,s._)("strong",null,"map"),(0,s.Uk)(", "),(0,s._)("strong",null,"zip"),(0,s.Uk)(", "),(0,s._)("strong",null,"filter"),(0,s.Uk)(" are their own iterators—after you step through their results once, they are exhausted.")],-1),he=(0,s._)("p",null,"In Python 3.X the dictionary keys, values, and items methods return iterable view objects that generate result items one at a time.",-1),de=(0,s._)("h2",{id:"documentation-interlude",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#documentation-interlude","aria-hidden":"true"},"#"),(0,s.Uk)(" Documentation Interlude")],-1),pe=(0,s._)("p",null,"The PyDoc system covered here can render a module’s internal documentation as either plain text in a shell, or HTML in a web browser.",-1),me=(0,s._)("p",null,[(0,s.Uk)("The "),(0,s._)("strong",null,"help"),(0,s.Uk)(" function: press the space bar to move to the next page, Enter to go to the next line, and Q to quit:")],-1),_e=(0,s._)("p",null,"Sphinx",-1),ge={},be=(0,t(3744).Z)(ge,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,i,r,o,u,c,h,d,p,m,_,g,b,f,y,x,v,w,k,U,q,j,P,L,S,X,T,I,N,F,C,E,B,z,A,M,D,Y,Z,R,H,O,W,K,Q,G,J,V,$,ee,ne,te,se,ae,le,ie,re,oe,ue,ce,he,de,pe,me,_e],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const t=e.__vccOpts||e;for(const[e,s]of n)t[e]=s;return t}},269:(e,n,t)=>{e.exports=t.p+"assets/img/2018-09-03-13-40-51.0417ae50.png"}}]);