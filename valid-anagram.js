/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj = {}
    if(s.length !== t.length) return false;
    for(let val of s){
        obj[val] = ++obj[val] || 1;
    }
    for(let val of t){
        if(obj[val]){
            obj[val]-=1;
        }else{
            return false;
        }
    }
    return true;
};