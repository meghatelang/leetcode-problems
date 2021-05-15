/**
 * @param {number[]} nums
 * @return {number[]}
 */
Solution 1:
var frequencySort = function(nums) {
    let obj = {}, res = [];
    for(const num of nums){
        obj[num] = ++obj[num] || 1;
    }
    let sortNums = Object.entries(obj).sort((a,b) => {
        return a[1] === b[1] ? b[0] - a[0] : a[1] - b[1];
    })
    for(let i = 0; i < sortNums.length; i++){
        for(let j = 0; j < sortNums[i][1]; j++){
            res.push(sortNums[i][0])
        }
    }
    return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
Solution 2:
var frequencySort = function(nums) {
    let obj = {}, res = [];
    for(const num of nums){
        obj[num] = ++obj[num] || 1;
    }
    nums.sort((a,b) => {
        if(obj[a] === obj[b]) return b - a;
        else return obj[a]-obj[b];
    })
    return nums;	
};