/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = {};
    for(const num of nums){
        count[num] = ++count[num] || 1;
    }
    let totalPairs = 0;
    for(const val in count ){
        totalPairs+= (count[val]*(count[val] - 1))/2;
    }
    return totalPairs;    
};