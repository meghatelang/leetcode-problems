/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let left = 0, right = S.length-1, regExp = /^[A-Za-z]+$/, arr = S.split('');
    while(left < right){
        if(!regExp.test(arr[left])) left++;
        else if(!regExp.test(arr[right])) right--;
        else{
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr.join('');    
};