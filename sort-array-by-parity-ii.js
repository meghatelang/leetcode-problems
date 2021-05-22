/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let res = [], oddIdx = 1, evenIdx = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            res[evenIdx] = nums[i];
            evenIdx+=2;
        }else{
            res[oddIdx] = nums[i];
            oddIdx+=2;
        }
    }
    return res;    
};