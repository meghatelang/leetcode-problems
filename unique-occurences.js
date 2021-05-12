/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj = {};
    for(let val of arr){
        obj[val] = ++obj[val] || 1;
    }
    const values = Object.values(obj);
    const uniqueValues = Array.from(new Set(values));
    return values.length === uniqueValues.length;
};