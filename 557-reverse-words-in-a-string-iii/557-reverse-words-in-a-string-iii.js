/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordsArr = s.split(' ');
    let reverseArr = [];
    
    for(let i = 0; i < wordsArr.length; i++){
        reverseArr.push(wordsArr[i].split('').reverse().join(''));
    }
    
    let answer = reverseArr.join(' ');
    
    return answer;
};