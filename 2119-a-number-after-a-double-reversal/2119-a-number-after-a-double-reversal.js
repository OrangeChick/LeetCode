/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    const reverseNum = num.toString().split('').reverse().join('');
    const reverseNumber = Number(reverseNum);
    const returnNum = reverseNumber.toString().split('').reverse().join('');
    
    if(returnNum == Number(num)){return true};
    
    return false;
};