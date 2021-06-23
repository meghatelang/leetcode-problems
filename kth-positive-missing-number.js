/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let max = arr.length + k, count = 0;
    for(let i = 1; i <= max; i++){
        if(arr.indexOf(i) === -1){
            count++;
            if(count === k) return i;
        }
    }    
};