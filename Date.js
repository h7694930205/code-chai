let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

/*
Date is type of object
*/

let myCreatedDate = new Date(2024,0,5)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

/**
 * Timezone
 */

let MyTime = Date.now();
console.log(MyTime);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);