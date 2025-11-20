//const user = new Object()
const user = {}

user.id = "123abc"
user.name = "Sidhant"
user.IslogedIn = false

//console.log(user)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Priyanshu",
            lastname: "Mehta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2) // concate arrays 

const obj3 = {...obj1, ...obj2} // will spread and concatenate all the objects
console.log(obj3);

const array =[
    {
        id : '1',
        email: 'test@google.com'
    },
    {
        id : '2',
        email: 'test@google.com'
    },
    {                               // Here in a array[] diffrent ocjects are present
        id : '3',
        email: 'test@google.com'
    },
    {
        id : '4',
        email: 'test@google.com'
    }
]

array[0].email = 'Abc@gmail.com'        // overriding the value of first element of the array

console.log(Object.keys(user));       //return the array of key present in the object(user); similarly we can do this with the values too
console.log(Object.values(user));     //return the array of values present in the object(user)
console.log(Object.entries(user));    //return the array of values & keys present in the object(user)

console.log(user.hasOwnProperty('IslogedIn'));  //for checking in the object is IsLogedIn is present or not.



