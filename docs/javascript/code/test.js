"use strict";
 
function f1(){
    return 0;
}

let f2 = ()=>{
    return 1;
}

function Foo(){
    this.x = 0;
    this.y = 1;
}

let f3 = new Foo();

let a = ['a','b']
let b = {a:'a'}
let c = Function()

console.log(f1.prototype)
console.dir(f1)

for(let k of Object.getOwnPropertyNames(f1)){
    console.log(k);
}

