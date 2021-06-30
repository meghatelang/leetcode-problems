/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            let idx = nums.indexOf(0);
            nums.splice(idx,1);
            nums.push(0);
        }
    }
};