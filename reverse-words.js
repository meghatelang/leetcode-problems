/**
 * @param {string} word
 * @return {string}
 */
const reverse = (word) => {
  let res = [];
  for(let i = word.length-1; i >=0; i--){
    res.push(word[i]);
  }
  return res.join('');
}
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strArr = s.split(" ");
    let reverseArr = [];
    for(let word of strArr){
        reverseArr.push(reverse(word))
    }
    return reverseArr.join(" ");    
};