/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0], min = nums[0], maxMul = nums[0];
	for (var i = 1; i <= nums.length - 1; i++) {
		let currVal = nums[i],
            tempMax = max * currVal,
            tempMin = min * currVal;
		max = Math.max(currVal, tempMin, tempMax);		
		min = Math.min(currVal, tempMin, tempMax);		
		maxMul = Math.max(maxMul, max);
	}
	return maxMul;
};