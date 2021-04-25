/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let res = {}
    for(const char of sentence){
        res[char] = ++res[char] || 1;
    }
    if(Object.entries(res).length < 26) return false
    return true;
};