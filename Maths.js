const score = 400;
//console.log(score);

const balance = new Number(1000)
// console.log(balance);

// console.log(balance.toString().lastIndexOf());

// console.log(balance.toFixed(2));

const otherNumber = 23.8765

//console.log(otherNumber.toPrecision(3)); // show the only  value precision means round of kare hai value ko


const otherNewNumber = 1000000

//console.log(otherNewNumber.toLocaleString('en-IN')); // show the commas this value shown in US code like this(10,00,000)


/** Maths  */


console.log(Math);
console.log(Math.abs(-1));  // (-) value change to positive value but positive value not show the negative value

console.log(Math.round(4.5)) //value change to round of 

console.log(Math.ceil(4.2)) // value if value more the 4 then change the result in 5
console.log(Math.floor(4.3)); // value if should be 4 means lower value ko prefer hogi

console.log(Math.random()); // random value show all time 0 to 1 

const min = 20
const max = 30

console.log(Math.floor(Math.random() * ( max - min + 1))+ min)