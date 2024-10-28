/**
 * This is the global scoops
 */

let a = 300

if(true){
    /**
     * This is the vlog scoops
     */
let a = 23
//console.log('Inner', a);
}
//console.log(a)


/**
 * Nested scope
 */

function one(){
    const userName = "Harsh"

    function two() {
        const websiteName = 'JavaScripts learn'
        // console.log(userName);
        
    }
    two()
}


one()

/**
 * Also this condtion user in if and else
 */

if (true) {
    const userName= 'Harsh'

    if(userName === 'Harsh') {
        const webdite = 'javaScript'
        // console.log(userName + webdite)
    }
    // console.log(webdite);
    
}
// console.log(userName);

//************************************************* Interesting ******************************************


console.log(addOne(5))

function addOne(num) {
    return num + 1
}



/**
 * 
 * This is also called a expretion
 */

const addTwo = function (num){
    return num + 2
}

addTwo(3)
