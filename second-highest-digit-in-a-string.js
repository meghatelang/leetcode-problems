/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let intArr = new Set();
    for(let val of s){
      if(!isNaN(val) ){
        intArr.add(parseInt(val))
      }
    }
  let sorted = Array.from(intArr).sort((a,b) => b-a);
    return sorted.length <= 1 ? -1 : sorted[1];    
};