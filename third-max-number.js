/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let sorted = nums.sort((a,b)=> {
        return b-a;
    })
    let distinct = Array.from(new Set(sorted));
    if(distinct.length < 3){
      return distinct[0];
    }else {
        return distinct[2];
    }
};