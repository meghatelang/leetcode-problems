/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arrStr = s.split(' ');
    return arrStr.splice(0,k).join(' ');
};