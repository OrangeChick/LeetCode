/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
    let answer = nums.sort(function(a,b){return a-b});
    
    return answer;
    
};