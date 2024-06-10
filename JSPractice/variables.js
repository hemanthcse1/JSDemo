// 1. var: old way 

// scope: var
// functionally / locally + global scope


var x = 10; // global scope
function test(){
    var y = 20; // functional scope
}

console.log(x);

var pop = "hi js";
function rel(){
    var top = "hello js";  
}
rel();
console.log(pop)
// console.log(top);

var browser = "chrome"
var browser = "firefox"
browser = "edge"
console.log(browser)

var g;
console.log(g) // undefined
g = "hello world"
console.log(g)

// issue with var
var flag = "hey hemanth"
var t1 = 4
if(t1 > 3){
    var flag = "hey ritchie"
}
console.log(flag)


// let:
// scope: block scoped
// {} -> this is called block

let m = "Hey Hemanth"
let time = 4
if(time > 3){
    let message = "hey how are you?"
    console.log(message)
}
// console.log(message)
console.log(m)

// can we update the let variable?
// ans: no, because Cannot redeclare block-scoped variable 'len'.
let len = 4
len = 5
console.log(len)


// const:
// constant value, cannot be reassigned or modified after initialization
const mg = "hey hemanth"
// mg = "hey ritchie" // TypeError: Assignment to constant variable.
console.log(mg)

const days = 7
console.log(100 * days)

var p
console.log(p)

let q
console.log(q)

const r = 10
console.log(r)