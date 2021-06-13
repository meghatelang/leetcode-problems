/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let dig, res = 0, sign = Math.sign(x);
    let positiveNo = Math.abs(x);
    while( positiveNo > 0){
        dig = positiveNo % 10;
        res = (res * 10) + dig;
        positiveNo = Math.floor(positiveNo/10);
        if(res > (2**31)) return 0;
    }
    return res * sign;    
};