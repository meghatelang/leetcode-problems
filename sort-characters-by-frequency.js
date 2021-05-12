/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {}, res = [];
    for(let char of s){
        obj[char] = ++obj[char] || 1;
    }
    let sortStr = Object.entries(obj).sort((a,b) => b[1]-a[1]);
    for(let i = 0; i < sortStr.length; i++){
        for(let j = 0; j < sortStr[i][1]; j++){
            res.push(sortStr[i][0]);
        }
    }
    return res.join("");    
};