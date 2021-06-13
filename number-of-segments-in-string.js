/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(!s.trim().length) return 0;
    let arr = s.trim().split(' ');
    let count = arr.length;
    for(let i = 0; i < arr.length; i++){
        if(/\s/.test(arr[i]) || arr[i].length === 0) count --;
    }
    return count;    
};