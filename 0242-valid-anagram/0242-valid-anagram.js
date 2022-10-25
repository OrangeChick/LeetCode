/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length){return false}
    
    const newS = s.split('').sort();
    const newT = t.split('').sort();
    
    let newArr = [];
    for(let i = 0; i < s.length; i++){
        if(newS[i] === newT[i]) {newArr.push(newS[i])}
    }
    
    if(newS.length === newArr.length) return true;
    return false;
};