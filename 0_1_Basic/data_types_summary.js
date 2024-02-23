// Primitive
// 7types:String, Number, Boolean, Null, Undefined, Symbol
//BigInt

 

//Reference Type(Non primitive)
//Array, Objects, functions.

 const score = 100
 const scoreValue = 100.3
 
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 31213233424453131313345n
console.log(id)
console.log(anotherId)
console.log(id===anotherId)

const heroes = ['sharuk','salman','doga'];
let myobj = {
    name: "hitesh",
    age:22,
}

const myFunc = function(){
    console.log("Hello World");
}
console.log(typeof(bigNumber))
console.log(typeof(outsideTemp))
console.log(typeof(myFunc))
console.log(typeof(heroes))
console.log(typeof(anotherId))
