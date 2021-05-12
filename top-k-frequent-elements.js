/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}, res = [];
    for(let num of nums){
        obj[num] = ++obj[num] || 1;
    }
    let sortNums = Object.entries(obj).sort((a,b) => b[1]-a[1]);
    for(let i = 0; i < k; i++){
        res.push(sortNums[i][0]);
    }
    return res;
};