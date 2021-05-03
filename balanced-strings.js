/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0, balance = 0;
    for(const eachChar of s){
        if(eachChar === 'L') balance+=1;
        else balance-=1;
        if(balance === 0) count+=1;
    }
    return count;
};