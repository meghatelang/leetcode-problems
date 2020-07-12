/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split("");
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        if(!/[aeiouAEIOU]/.test(arr[left])) left++;
        else if(!/[aeiouAEIOU]/.test(arr[right])) right--;
        else{
            [arr[left],arr[right]] = [arr[right],arr[left]];
            left++;
            right--;
        }
    }
    return arr.join("");    
};