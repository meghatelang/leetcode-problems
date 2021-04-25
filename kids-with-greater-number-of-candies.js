/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max.apply(null, candies);
    candies.map((candy,i) => {
        candies[i] = candies[i] +  extraCandies >= max;
    })
    return candies;
};