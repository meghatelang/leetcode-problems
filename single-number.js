/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for(let val of nums){
        obj[val] = ++obj[val] || 1;
    }
    for(let val in obj){
        if(obj[val] === 1) return val;
    }    
};