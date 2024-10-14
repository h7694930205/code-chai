//Two type of memory allocation

// Stack(primitive) 
// Heap(non-primitive)

let checkMemory = "Testing"

let anotherName = checkMemory
anotherName = "Memory"
console.log(checkMemory);
console.log(anotherName);

let user= {
    email : "testineed1@gmail.com",
    upi: 'user@sbi'

}

console.log(user);

let userTwo = user
userTwo.email = 'harsh@google.com'
console.log(user.email);
console.log(userTwo.email);