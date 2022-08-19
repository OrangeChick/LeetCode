/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let sortHeight = [...heights].sort(function(a,b){return a-b});
    
    let count = 0;
    for(let i = 0; i < heights.length; i++){
        if(sortHeight[i] != heights[i]){count++};
    }
    
    console.log(heights);
    console.log(sortHeight);
    
    return count;
};