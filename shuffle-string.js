/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = [];
    indices.forEach((num,i) => {
        result[num] = s[i];
    })
    return result.join('');
};