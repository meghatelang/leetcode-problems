/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = new Map();
    for(let val of s){
        obj.set(val, (obj.get(val) || 0)+1);
    }
    let arrStr = s.split('');
    for(let i = 0; i < arrStr.length; i++) {
        if(obj.get(arrStr[i]) === 1) return i;
    }
    return -1;
};