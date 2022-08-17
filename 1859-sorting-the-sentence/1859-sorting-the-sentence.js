/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let sArr = s.split(' ');
    let answerArr = [];
    
    for(let i = 1; i <= sArr.length; i++){    
        for(let j = 0; j < sArr.length; j++){
            if(sArr[j].includes(i) == true){
                answerArr.push(sArr[j])
            };
        }
    }
    
    let result = [];
    
    for(let i = 0; i < answerArr.length; i++){
        let trash = answerArr[i].split('').splice(0, answerArr[i].length - 1).join('');
        result.push(trash);
    }
    
    let answer = result.join(' ');
    
    
    return answer;
};