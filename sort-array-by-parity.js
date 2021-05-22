/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    nums.sort((a,b) => a%2 - b%2 || a- b);
    return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let res = [];
    for(const num of nums){
        if(num % 2 === 0) res.unshift(num);
        else res.push(num);
    }
    return res;
};