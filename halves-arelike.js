/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
     for(let i = 0; i < s.length/2; i++){
         count+= vowels.includes(s[i]) - vowels.includes(s[s.length -1-i])
     }
  return !count;
};