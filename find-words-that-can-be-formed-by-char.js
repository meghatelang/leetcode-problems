/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let obj1 = {};
    for(const char of chars){
        obj1[char] = ++obj1[char] || 1;
    }
    let count = 0;
    for(const word of words){
        let obj2 = {}, sum = 0;
        for(const char of word){
            obj2[char] = ++obj2[char] || 1;
            if(obj2[char] <= obj1[char]){
                sum+=1;
            }
        }
        if(sum === word.length) count+=sum;
    }
    return count;
};