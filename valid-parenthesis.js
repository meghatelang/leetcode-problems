/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    if(s.length % 2 !== 0) return false;
    for(let char of s){
        let topIdx = stack.length - 1;
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        }else if(char === ')' && stack.length && stack[topIdx] === '(' ){
            stack.pop();
        }else if(char === '}' && stack.length && stack[topIdx] === '{' ){
            stack.pop();
        }else if(char === ']' && stack.length && stack[topIdx] === '[' ){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
};