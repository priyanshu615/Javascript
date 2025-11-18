const name = "Priyanshu"
const rollNo = 231920310100

//console.log(name + rollNo + " GLBITM") 

//it is outdated to use instead we will use {back tick ``} and $ sign

console.log(`My name is ${name} and my roll No is ${rollNo}`);

//Another method to declare String
const DiscordName = new String('Succinct')

// console.log(DiscordName)      => [String: 'Succinct']
// console.log(DiscordName[0])   => S
// console.log(DiscordName.length) => 8
// console.log(DiscordName.charAt(2))  => c
// console.log(DiscordName.indexOf('i')) => 4

const newString = DiscordName.substring(0, 4)
console.log(newString);   //Succ

const anotherString = DiscordName.slice(-7, 4)
console.log(anotherString);   //ucc

const newStringOne = "    Priyanshu    "
console.log(newStringOne) // output will come with spaces
console.log(newStringOne.trim()) //output will come without spaces

const url = "https://pyrro.com/priyanshu%20mehta"

console.log(url.replace('%20','-')) // output will come with '-' not '%20'
console.log(url.includes('pyrro')) //true
console.log(url.includes('polo'))  //false



