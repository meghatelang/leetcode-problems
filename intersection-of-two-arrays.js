/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
    for(let val of nums1Set){
        if(nums2Set.has(val)) res.push(val);
    }
    return res;
};