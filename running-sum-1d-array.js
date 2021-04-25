/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    const result = nums.map(num => {
        return sum+=num;   
    })
    return result;
};
