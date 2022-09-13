/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aNum = BigInt(`0b${a}`);
    let bNum = BigInt(`0b${b}`);
    
    let sumNum = aNum + bNum;
    let answer = sumNum.toString(2);
    
    return answer;
};