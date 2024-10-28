/**
 * jo bhi function ke under value usko exess krne ke liye this use kiya jata hai 
 * {} ke under jo bhi value use corrent contect khte hai~
 * "this" Method is not allow in the function 
 */

const user = {
    userName : 'Harsh',
    price: 39,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);        
    }
}

user.welcomeMessage()
user.userName = 'champ'
user.welcomeMessage(1)


/**
 * Impo - 'this' method is not use in the function
 *  
 */
// function chai(){
//     let username = 'harsh'
//     console.log(this.username)
// }

// chai()


const chai = ()  => {
    let userName = 'harsh'
    console.log(this)
} 
chai()

// ***************************Arrow Function ***************************

const addTwo = (num1 , num2) => {
    return num1 + num2
} 

console.log(addTwo(2,3))

/**
 * This is the second method to declear the arrow function 
 * This is the implisiter method
 * If you have use the {} then use the return but if you have use the () then not use the return key word
 */

const addThree = (num1, num2) =>( num1 + num2 )

/**
 * in case you have use define the objet the use this type
 */

const addFour = (numb1, num2) => ({userName: 'harsh'})
console.log(addThree(2,3));


const myArray = [1,2,3,4,5,6]
 
