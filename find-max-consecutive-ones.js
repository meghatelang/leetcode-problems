/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = [], count = 0;
    for(let val of nums){
        if(val === 1){
            count++;
        } else {
            count = 0;
        }
        res.push(count);
    }
    return Math.max(...res);    
};