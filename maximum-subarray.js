/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0, maxSum = nums[0];
    nums.forEach(num => {
        sum = Math.max(num, sum+num);
        maxSum = Math.max(sum, maxSum);
    })
    return maxSum;
};