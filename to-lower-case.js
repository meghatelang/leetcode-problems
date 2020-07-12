/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
   let res=[]
    for(let index in str){
      if( str.charCodeAt(index) >= 65 && str.charCodeAt(index) <=90 ){
        res.push(String.fromCharCode(str.charCodeAt(index)+32))
      }
      else res.push(str[index]);
    }
  return res.join("");
};