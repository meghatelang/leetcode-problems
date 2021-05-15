/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map();
    for(let val of nums){
        map.set(val, (map.get(val) || 0)+1);
        if(map.get(val) === 2) return val;                
    }
};