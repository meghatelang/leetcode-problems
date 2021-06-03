/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0, end = nums.length - 1;
    for(let i = 0; i <= end; i++){
        if(nums[i] === 0){
            [nums[start], nums[i]] = [nums[i], nums[start]];
            start++;
        }else if(nums[i] === 2){
            [nums[i], nums[end]] = [nums[end], nums[i]];
            end--;
            i--;
        }
    }
};