#  Part V. Modules and Packages
Modules are processed with two statements and one important function:
- import: Lets a client (importer) fetch a module as a whole
- from: Allows clients to fetch particular names from a module
- imp.reload (reload in 2.X): Provides a way to reload a module’s code without stopping Python

In Python, cross-file module linking is not resolved until such import statements are executed at runtime; their net effect is to assign module names—simple variables like b—to loaded module objects. In fact, the module name used in an import statement serves two purposes: it identifies the external file to be loaded, but it also becomes a variable assigned to the loaded module.

Similarly, objects defined by a module are also created at runtime, as the import is executing: import literally runs statements in the target file one at a time to create its contents.

In python, imports perform three distinct steps the first time a program imports a given file:
1. Find the module’s file.
2. Compile it to byte code (if needed).
3. Run the module’s code to build the objects it defines.

Bear in mind that all three of these steps are carried out only the first time a module is imported during a program’s execution; later imports of the same module in a program run bypass all of these steps and simply fetch the already loaded module object in memory. Technically, Python does this by storing loaded modules in a table named **sys.mod** ules and checking there at the start of an import operation. If the module is not present, a three-step process begins. (see **imp.reload**)
> Python keeps already imported modules in the built-in **sys.modules** dictionary so it can keep track of what’s been loaded.

Notice that compilation happens when a file is being imported. Because of this, you will not usually see a .pyc byte code file for the top-level file of your program, unless it is also imported elsewhere—only imported files leave behind .pyc files on your machine.

### The Module Search Path
Roughly, Python’s module search path is composed of the concatenation of these major components, some of which are preset for you and some of which you can tailor to tell Python where to look:
1. The home directory of the program (subdirectories not included)
2. PYTHONPATH directories (if set)
3. Standard library directories
4. The contents of any .pth files (if present)
5. The site-packages home of third-party extensions

Ultimately, the concatenation of these four components becomes **sys.path**, a mutable list of directory. The first and
third elements of the search path are defined automatically. Because Python searches the concatenation of these components from first to last, though, the second and fourth elements can be used to extend the path to include your own source code directories.

By modifying the sys.path list, you can modify the search path for all future imports made in a program’s run. Such changes last only for the duration of the script, however; PYTHONPATH and .pth files offer more permanent ways to modify the path—the first per user, and the second per installation.

Python automatically selects any type that matches a module’s name. For same names with different extensions, Python follows a standard picking order, though this order is not guaranteed to stay the same over time or across implementations. 

By using import hooks, archived files are automatically extracted at import time when a  .zip file is selected from the module import search path.

For details, see the builtin **importlib._\_import__** function

Third-party extensions for Python typically use the **distutils** tools in the standard library to automatically install themselves, so no path configuration is required to use their code.

Systems that use distutils generally come with a setup.py script, which is run to install them; this script imports and uses distutils modules to place such systems in a directory that is automatically part of the module search path (usually in the Lib\site-packages subdirectory of the Python install tree, wherever that resides on the target machine).

## Module Coding Basics
### Module Filenames
The .py is technically optional for top-level files that will be run but not imported.

In fact, both the names of module files and the names of directories used in
package imports (discussed in the next chapter) must conform to the rules for variable names presented.

**import** fetches the module as a whole, so you
must qualify to fetch its names; in contrast, **from** fetches (or copies) specific names out of the module.

In Python 3.X, the from ...* statement form described here can be used
only at the top level of a module file, not within a function.

Just like def, import and from are executable statements, not compile-time declarations. They may be nested in if tests, to select among options; appear in function defs, to be loaded only on calls (subject to the preceding note); be used in try statements, to provide defaults; and so on.
```
>>> from small import x, y # Copy two names out
>>> x = 42 # Changes local x only
>>> y[0] = 42 # Changes shared mutable in place
```

At least conceptually, a from statement like this one:
```
from module import name1, name2 # Copy these two names out (only)
```
is equivalent to this statement sequence:

```
import module # Fetch the module object
name1 = module.name1 # Copy names out by assignment
name2 = module.name2
del module # Get rid of the module name
```

The **from** always imports the entire module into memory if it has not yet been imported, regardless of how many names it copies out of the file. There is no way to load just part of a module file.

Moreover, the from module import * form really can corrupt namespaces and make names difficult to understand, especially when applied to more than one file.

Probably the best real-world advice here is to generally prefer import to from for simple modules, to explicitly list the variables you want in most from statements, and to limit the from * form to just one import per file.

The **as** extension works in both import and from as a simple renaming tool.

In fact, internally, module namespaces are stored as dictionary objects.

The LEGB scope rule applies only to bare, unqualified names—it may be used for the leftmost name in a name path, but later names after dots search specific objects instead.

lexical scoping notion—in Python, the scopes surrounding
a piece of code are completely determined by the code’s physical position in your file. Scopes are never influenced by function calls or module imports.

import operations never give upward visibility to code in imported files
—an imported file cannot see names in the importing file. In some sense, although imports do not nest namespaces upward, they do nest downward.
```
print(mod2.mod3.X) # Nested mod3's X
```

### Reloading Modules
The **reload** function forces an already loaded module’s code to be reloaded and rerun. Assignments in the file’s new code change the existing module object in place.

> Note that reload currently only works on modules
> written in Python;

Because reload expects an object, a module must have been previously imported successfully before you can reload it.

When you call reload, Python rereads the module file’s source code and reruns its toplevel statements. Perhaps the most important thing to know about reload is that it changes a module object in place; it does not delete and re-create the module object.
- Reloads impact all clients that use **import** to fetch modules
- Reloads impact future from clients only. Clients that used from to fetch attributes in the past won’t be affected by a reload; they’ll still have references to the old objects fetched before the reload.
- Reloads apply to a single module only. You must run them on each module you wish to update, unless you use code or tools that apply reloads transitively.

## Module Packages
Dotted package  
**from package import item**: the item can be either a submodule (or subpackage) of the package, or some other name defined in the package, like a function, class or variable.  
**import item.subitem.subitem**: each item except for the last must be a package; the last item can be a module or a package but can't be a class or function or variable defined in the previous item.

Tow kinds of imports:
- absolute imports
- relative imports

In sum, Python imports select between relative (in the containing directory) and absolute (in a directory on sys.path) resolutions as follows:
- Dotted imports: from . import m  
Are relative-only in both 2.X and 3.X
- Nondotted imports: import m, from m import x  
Are relative-then-absolute in 2.X, and absolute-only in 3.X

Note that relative imports are based on the name of the current module. Since the name of the main module is always "__main__", modules intended for use as the main module of a Python application must always use absolute imports.

Python 3.3 adds another flavor to modules: *namespace packages*.

Packages are just a special kind of module. Specifically, any module that contains a `__path__` attribute is considered a package.

Two kinds of packages:
* regular packages
* namespace packages