/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let obj = {}, idx , dup, visited = false;
    nums.sort((a,b) => a-b);
    let uniqueArr = Array.from(new Set(nums));
    for(let i = 0; i < nums.length; i++){
        if(uniqueArr[i] !== i+1 && !visited ) {
            idx = i+1;
            visited = true;
        }
        obj[nums[i]] = ++obj[nums[i]] || 1;
    }
    for(let val in obj){
        if(obj[val] === 2) dup = parseInt(val);
    }
    return [dup,idx];
};