/**
 * Singleton- contractor se object bannega to vo singleton object kahalata hai
 */

/**
 * What is contractor method
 * if you have create the object like this "Object.create". then this method called the contractor method
 */

/**
 * object literals
 */

/**
 * How to show the symbol object
 */

/**
 * Important note
 * 'fullName': 'Harsh Upadhyay', // if you have assess the object in '.'(dot) format then you have not assess the this value so we have use the this type to assess the object like this Jsusers['age']. the most important thing is use value in sting format not use the number
 */

/**
 * If have use the syntax then defend like this []
 * for the batter exp. i have already defend in blow
 */

const mySym = Symbol('TestSymbol')
const JsUsers = {
    name:'Harsh',
    'fullName': 'Harsh Upadhyay',
    [mySym]: "myKey1",
    age:25,
    location:'Ahmadabad',
    email:'harsh@gmail.com',
    isLoggedIn: false,
    lastLoginDays:['Monday','Tuesday','Wednesday','Thursday']
}

//console.log(JsUsers.age)
/**
 * This is the best type to assess the oject value 
 */
// console.log(JsUsers['age'])
//console.log( JsUsers[mySym]);


/**
 * Change the object value like this 
 */
JsUsers.email = "harshUpdhyay2@gmail.com";

/**
    * if you have use the freeze the not change the object value
*/
//Object.freeze(JsUsers)
JsUsers.email = "harshUpdhyay132@gmail.com";

//console.log(JsUsers);

/**
 * Add the function in objects
 */

/**
 * JsUsers.greeting = function(){
    console.log('JsUsers.greeting');	
}

JsUsers.greetingTwo = function(){
    console.log(`Hello js user,${this.fullName}`);	
} 
 */


//console.log(JsUsers.greetingTwo());

//------------------------------------------------Object-------------------------------------------------------

/**
 * Singleton object
 * const tinderUser = new Object()
 */

/**
 * Non singleton object
 */

const tinderUser = {}

tinderUser.id = '1234abcdef'
tinderUser.name = 'Harsh'
tinderUser.isLoggedIn = false

// console.log(tinderUser)



const regularUser = {
    email:'harshupadhyay1@gmail.com',
    fullname: {
        userfullname: {
            firstaname: 'harsh',
            lastname: 'upadhyay'
        }
    }
}

// console.log(regularUser?.fullname.userfullname.firstaname);


const obje1 = {1:'a',2:'b'}
const obje2 = {3:'c',4:'e'}
const obje4 = {5:'c',6:'e'}
//const objet3 = { obje1, obje2}


//const obje3 = Object.assign({},obje1,obje2)   // This is the first method
// also use the spreate oprater

const obje3 = {...obje1,...obje2}
//console.log(obje3)

const users = [
    {
        id: 1,
        email:'test@gmail.com'
    },
    {
    id: 1,
    email:'test@gmail.com'
    }
]


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'));// check the property

const course = {
    name : 'js in hindi',
    price : 999,
    aotherCource:'harsh'
}
// This is the not perfect way
//course.aotherCource

/**
 * 
This the perfect way to integrate the value
const {name} = course
 */

const {name} = course
/**
 * and the also benifite of the you can chagne the name like this i have show in blow line
 * const {name: firstName} = course
 * console.log(firstName);
 */

// const {name: firstName, price} = course


// console.log(firstName, price);

// This is the API information
// {
//     'name':'harsh',
//     'courceName': 'JS in hindi',
//     'price':'free'
// }