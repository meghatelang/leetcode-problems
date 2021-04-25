/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let count = {};
    for(const num of nums){
        count[num] = ++count[num] || 1;
    }
    let sum = 0;
    for(const val in count){
        if(count[val] === 1){
            sum+= parseInt(val);
        }
    }
    return sum;
};