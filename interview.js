/**
 * Javascript execution context
 * Means how to execute the code in javaScript
 */


/**
 * This is the two type of Execution Context
 * Global Execution Context
 * Function Execution Context
 */

/**
 * How to execute the code in JavaScripts
 * There are two phase the code
 * Memory Creation phase
 * Execution phase 
 */

let val1 = 10
let val2 = 5

function twoNumber(num1 , num2) {
    let total = num1 + num2
    return total
}
let result = twoNumber(val1 + val2)
let result2 = twoNumber(10,5)

/**
 * Phase - 1
 * First Globe execution 
 */

/**
 * Phase - 2
 * Memory phase
 * val1  - undefined
 * val2 - undefined
 * totalNumber - defination 
 * result - undefined
 * result2 - undefined
 */

/**
 *  
 * Execution phase
 * var1 = 10
 * var2 = 5
 * TwoNumber - New Variable envirment + execution thread
 * Jitni bar function execute hote utni bar new wnvormant create hpte hai 
 * uske bad the memory and execution phase dono fir se execute hoge
 * Global execution ek bat create hone ke bad then after kam ho jane ke bad delete bhi ho jata hai
 * then result - 15  becouse is me function execute ho rha hai 
*/                                                                                                                                                                                                                                                                                                                                                 