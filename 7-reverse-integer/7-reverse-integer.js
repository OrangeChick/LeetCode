/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let answer = 0;
    
    if(x < 0) {
        x = x * (-1);
        x = x.toString().split('').reverse().join('');
        answer = x * (-1);
    }
    
    else{
        answer = x.toString().split('').reverse().join('');
    }
    
    if(answer > Math.pow(2, 31) || answer < Math.pow(-2, 31)){return 0};
    
    return Number(answer);
};