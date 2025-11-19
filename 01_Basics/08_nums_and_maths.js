const score = 400
console.log(score);

const balance = new Number(100)
// console.log(balance);              //100 - number
// console.log(balance.toString());      //100 - string 
// console.log(typeof balance.toString());     //Ouput String

// console.log(balance.toFixed(2));   //100.00 decimal will be included upto 2 places

const otherNumber = 123.4563
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString(`en-IN`));  //covert comma in the zeros acc to indian system


// *************** Maths ****************

console.log(Math)
// console.log(Math.abs(-4));  //will give absolute value of the number i.e 4
// console.log(Math.round(4.5));  //will give round of value the number i.e 5
// console.log(Math.ceil(4.5));  //yeh hamesa upar ka value ouput dega i.e the next value which is in this case is 5
// console.log(Math.floor(4.5));  // aur yeh hmesa niche ka value dega even though hm 4.9 dnge input tab bhi 4 return krega output
// console.log(Math.min(3,4,5,6,7,)); // sabse minimun value rerurn krega sare input mein se 
// console.log(Math.max(3,4,5,6,7,)); // sabse maximum value rerurn krega sare input mein se 


console.log(Math.random()); //gives out random number rwanging from o to 1
console.log(Math.random()*10); //gives out random number rwanging from o to 10
console.log((Math.random()*10)+1); //gives out random number rwanging from 1 to 10..it will never give the ouput == 0
console.log(Math.floor((Math.random()*10)+1)); //will give out the floor value of te above

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)