/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseNum = x.toString().split('').reverse().join('');
    
    if(x == reverseNum){return true};
    
    return false;
};