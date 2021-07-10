/**
 * @param {number} n
 * @return {boolean}
 */
const squareOfDigits = (n) => {
    return n.toString().split('').reduce((acc, cur) => {
        return acc = acc + (cur * cur);
    }, 0)
}
var isHappy = function(n) {
    let isSeen = {};
    while(n!==1 && !isSeen[n]){
        isSeen[n] = true;
        n = squareOfDigits(n)
    }
    return n === 1;
};