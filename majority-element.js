/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    for(let val of nums){
        obj[val] = ++obj[val] || 1;
        if(obj[val] > (nums.length/2)) return val;
    }
};