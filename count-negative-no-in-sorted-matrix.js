/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    grid.flat().forEach((num) => {
        if(num < 0) count++;
    })
    return count;   
};