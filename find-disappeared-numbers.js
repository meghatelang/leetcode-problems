/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let uniqueArr = new Set(nums);
    let result = [];
    for(let i = 1; i <= nums.length; i++){
        if(!uniqueArr.has(i)) result.push(i);
    }
    return result;    
    };