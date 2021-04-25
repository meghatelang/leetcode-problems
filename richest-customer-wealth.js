/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = [];
      for(let i=0; i < accounts.length; i++){
       result.push(accounts[i].reduce((acc,cur)=> {return acc+cur;}))
        }
    return Math.max.apply(null,result);
};