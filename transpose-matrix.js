/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
};