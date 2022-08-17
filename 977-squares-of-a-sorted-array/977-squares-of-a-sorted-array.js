/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let powArr = [];
    
    for(let i = 0; i < nums.length; i++){
        powArr.push(Math.pow(nums[i], 2));
    }
    
    let answer = powArr.sort(function(a,b){return a-b});
    
    return answer;
};