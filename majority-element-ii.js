/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let obj = {}, res = new Set();
    for(let val of nums){
        obj[val] = ++obj[val] || 1;
        if(obj[val] > (nums.length/3)){
            res.add(val);
            
        };
    }
    return [...res];
};