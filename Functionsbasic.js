

function sayMyName() {
    console.log('jarsj')
    console.log('harsh')
}


sayMyName()


/**
 * if you have print like this so show the undified value show, becouse in this function we have not pass the any value only pass the console log 
 * function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
    
} 
 * @param {*} number2 
 */


function addTwoNumber(number1, number2) {
    /**
     * This is the first way to return the value
     * let result = number1 + number2
    return result 
     */
    
    return number1 + number2
    
}

const result = addTwoNumber(6,5)

// console.log(result);


function loginUserMessage(userName){
    if(!userName) {
        console.log('Please enter the userName ');
    return
        
    }
    return `${userName} just logged in `
}

// console.log(loginUserMessage('harsh'))
console.log(loginUserMessage())


function calculateCardPrice(...num1) {
    return num1
}

console.log(calculateCardPrice(2,12,3,2,3));
/**
 * This is the object function 
 */
const user = {
    username:'harsh',
    price:300
}

function handlerObject(anyObj){
    console.log(`User name is ${anyObj.username} and price is ${anyObj.price}`);
    
    return anyObj
}

console.log(handlerObject(user))


/**
 * This is a array function 
 */

const newArrayNumber = [522,545,47,2154,5]

function handleArray(NewArray){
    return NewArray[1];
}

console.log(handleArray(newArrayNumber));
