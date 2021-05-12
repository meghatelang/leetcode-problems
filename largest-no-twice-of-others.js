/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxNumber = Math.max.apply(null, nums);
    let maxIndex = nums.indexOf(maxNumber);
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== maxNumber && maxNumber < 2*nums[i]) return -1;
    }
    return maxIndex;    
};