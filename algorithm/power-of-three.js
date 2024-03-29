// let n = 81
let n = 9

var isPowerOfThree = function(n) {
    if(n == 0){
        return false
    }
    
    while(n % 3 == 0){
        n /= 3
    }
    
    return n == 1
};

console.log(
    isPowerOfThree(n)
)

// Given an integer n, return true if it is a power of three. 
// Otherwise, return false.

// An integer n is a power of three, if there exists an integer x 
// such that n == 3x.