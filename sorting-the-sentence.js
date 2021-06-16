/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res = [];
    let strArr = s.split(" ");
    for(let i = 0; i < strArr.length; i++){
        let idx = strArr[i].slice(-1) - 1;
        res[idx] = strArr[i].slice(0,-1);
    }
    return res.join(' ');
};