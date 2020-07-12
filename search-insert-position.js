/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let insertPos = nums.indexOf(target);
    if(insertPos == -1 && nums.length > 1){
        for(let i=0;i< nums.length-1;i++){
            let nearest= nums.reduce((a,b)=> Math.abs(a-target)<Math.abs(b-target) ? a : b);
            insertPos = nearest < target ? nums.indexOf(nearest) + 1 :  nums.indexOf(nearest);
        }
    }
    else if(insertPos == -1){
        insertPos = nums[0] < target ? nums.indexOf(nums[0]) + 1  : nums.indexOf(nums[0]);
    }
    return insertPos;
};