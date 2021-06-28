/**
 * @param {number} x
 * @return {boolean}
 */
const reverse = (num) => {
    let res = 0, dig, temp = Math.abs(num);
    while(temp > 0){
        dig = temp % 10;
        res = (res*10)+dig;
        temp = Math.floor(temp/10);
    }
    return res;
}
var isPalindrome = function(x) {
    if(reverse(x) === x) return true;
    return false;
};