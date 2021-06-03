/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 0) return false;
    if(n === 1) return true;
    while(n % 3 === 0){
        n/=3;
        if(n === 1) return true;
    }
    return false;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 0) return false;
    while(n % 3 === 0){
        n/=3;
    }
    return n === 1;
};