const myArr = [1,2,3,4,5,6]
const myHero = ["Harsh", "Keshav", "Mohit", "Krish", "New"]
//console.log(myArr);

//Array Methods


/**
 * This is the return the Add the value in Array 
myArr.push(7) 
 */


/**
 * This is the return the last value is remove, and not pass the any value in pop() bracket
myArr.pop()
 */


/**
 *  This is the return the add the value in the start for the array
 * this is the Array [0,1,2,3]
 * if i have added the value in using the unshift method the value is added the first index for better clarification show the blow exm.
 * i have added the 5 number
 * [5,0,1,2,3]
myArr.unshift(5)
 */


// this is a Boolean type
//console.log(myArr.includes(9))
/**
 * Show the index of the array
 * if value is not exist then show the -1 value shown   
console.log(myArr.indexOf(3))
*/

/**
 * Join method change the type 
const newArr = myArr.join()
console.log(typeof(newArr))
 */


/**
 * Slice and splice
 * Slice or splice me ye diffrence hai ki spilce me jo range hoti hai use range ki value remove ho jati hai array mese
 */
// console.log("A",myArr )
const mynm1 = myArr.slice(1,3)
// console.log(mynm1)
// console.log('B',myArr)

const mynm2 = myArr.splice(1,3)
// console.log("b",myArr )
// console.log(mynm2)

const newArray = ['Thor','harsh','newData']
const newArrData = ['book','pen']

/**
 * Push is use because merge to Array 
 * merge to array but input should be like this 
 * [ 'Thor', 'harsh', 'newData', [ 'book', 'pen' ] ]
newArray.push(newArrData)
console.log(newArray)
 */

/**
 * concat is use for the merge the to array value output same like the push
 * The benifit of the concat is the merge to array and output should be like this
 * [ 'Thor', 'harsh', 'newData', 'book', 'pen' ]
 * also create the new array
 */
// const AllData = newArray.concat(newArrData)
// console.log('newArray',AllData);

/**
 * this is the sprete method this is the easy for the data show
 * the output should be same as the concat
 */
const allDataShow = [...newArray,...newArrData]
console.log(allDataShow);

/**
 * flat method is the used because the data show in the single array 
 * this is the array [1,2,3,[4,5,6],7,[6,7,[4,5]]]
 * But after the using the flat then show the output 
 * [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
 */
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




/**
 * the value is change the array 
 * for the i have use the from method
 * The from method is change to all type in Array format
 * The output should be like this [ 'h', 'a', 'r', 's', 'h' ]'
 * We have use to object and string also added
 */
console.log(Array.isArray("Harsh"))
console.log(Array.from("harsh"))

/**
 * Important note
 * if you have convert the object in array for the format console.log(Array.from({name:"upadhyay"})). So also output will be show in empty array([])
 */
console.log(Array.from({name:"upadhyay"})) // interesting


/**
 * We have use the 'of' method to change the array format
 */
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
