// stack (Primitive),  Heap (Non-primitive)

// Stack Memory => In this ,copy of variable is passed

let Myname = "Priyanshu Mehta"

let anothername = Myname
anothername = "Sidhant Mehta"

console.log(Myname)
console.log(anothername)

// heap Memory => In this type reference is passed
let userOne = {
    email : "sidmehta@gmail.com",
    upi : "pyrro@ybl",
}

let userTwo = userOne
userTwo.email = "priyanshu@gmail.com"

console.log(userOne.email)

//Notes :
//1. Stack me user ko original ka copy milta hai
//2. Heap me user ko original ka refrence milta hai
