// Immediately Invoked Function Expressions  (IIFE)

/**
 * this is the called to IIFE function xpresstion
 */

/**
 * Global scope ke polution ko htane ke liye uee kiya jata hau use IIFE bolte hai
 */

/**
 * If you have pass the two IIFE in one file then the ; is compersary
 */
(function chai(){
    /**
     * This is the name IIFE
     */
    console.log('DB CONNECTED');
    
})();

((name)=> {
    /**
     * This is the simple IIFE
     */
    console.log(`BD second ${name}` );
    
})('harsh')


