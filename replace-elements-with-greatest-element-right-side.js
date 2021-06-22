/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let res = [], tempArr = [...arr];
    for(let i = 0; i < arr.length; i++){
        tempArr.shift();
        res.push(Math.max(...tempArr));
    }
    res[arr.length-1] = -1;
    return res;
};