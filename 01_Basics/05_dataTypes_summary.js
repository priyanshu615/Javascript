// Primitive
// 7 types : String , Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false
const bigNumber = 23542444n 

// console.log(typeof score)       // number
// console.log(typeof isLoggedIn)  // boolean
// console.log(typeof outsideTemp) // null always returns object bc it is unique
// console.log(typeof id)          // symbol
// console.log(typeof bigNumber)   // bigint



// Refrence (Non Primitive)
//Array, Objects, Functions

const heros = ["Batman","Hulk","Thor"];
let myObj = {
    name : "Priyanshu",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World")
}


// console.log(typeof myObj)      // object
// console.log(typeof heros)      // object
// console.log(typeof myFunction) // function (it is object function)


