/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
   if(rowIndex == 0) return [1];
   if(rowIndex == 1) return [1, 1];
    
    let result = [[1], [1,1]];
    
    for(let i = 2; i < rowIndex + 1; i++){
        const arr = [1];
        const prev = result[i-1];
        const prevLength = prev.length;
        for(let j = 0; j<prevLength-1; j++){
            arr.push(prev[j]+prev[j+1]);
        }
        arr.push(1);
        result.push(arr);
    }
    
    let answer = result.pop();
    return answer;
};