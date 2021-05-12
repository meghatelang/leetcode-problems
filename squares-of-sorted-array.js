/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = nums.map(num => {
        return num*num;
    })
    return res.sort((a,b) => a-b);
};