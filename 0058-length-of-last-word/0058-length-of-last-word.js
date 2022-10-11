/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitWords = s.trim().split(' ');
    const lastWord = splitWords.pop();
    
    const answer = lastWord.length;
    
    return answer;
};