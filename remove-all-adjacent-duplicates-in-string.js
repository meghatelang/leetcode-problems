/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [], top = -1;
    for(let i = 0; i < s.length; i++){
        if(stack[top] === s[i]){
            stack.pop();
            top--;
        }else{
            stack.push(s[i]);
            top++;
        }
    }
    return stack.join('');    
};