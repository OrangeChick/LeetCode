/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sCase = s.split('').sort();
    const tCase = t.split('').sort();
    
    for(let i = 0; i < s.length; i++){
        if(sCase[i] !== tCase[i]){return tCase[i]} 
    }
    return tCase.pop();
};