/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let count = 0;
  const mapRule = {
    'type': 0,
    'color': 1,
    'name': 2    
  }
  items.forEach((item)=> {
    if(item[mapRule[ruleKey]] === ruleValue) count++;
  })
    return count;
};