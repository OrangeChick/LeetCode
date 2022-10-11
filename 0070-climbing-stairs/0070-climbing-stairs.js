/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const step = new Array(n).fill(0);
    
    step[1] = 1;
    step[2] = 2;
    
    for(let i = 3; i <= n; i++){
        step[i] = step[i-2] + step[i-1];
    }
    
    return step[n];   
};