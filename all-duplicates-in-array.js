/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj = {};
    for(let val of nums){
        obj[val] = ++obj[val] || 1;
    }
    let res = [];
    for(let val in obj){
        if(obj[val] === 2){
            res.push(parseInt(val));
        }
    }
    return res;
};