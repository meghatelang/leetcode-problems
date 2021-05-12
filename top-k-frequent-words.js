/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    words.sort();
    let obj = {}, res = [];
    for(let word of words){
        obj[word] = ++obj[word] || 1;
    }
    let sortWords = Object.entries(obj).sort((a,b) => b[1]-a[1]);
    for(let i = 0; i < k; i++){
        res.push(sortWords[i][0])
    }
    return res;
};