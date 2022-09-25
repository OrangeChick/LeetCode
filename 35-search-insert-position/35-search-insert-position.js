/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let resultArr = [];
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < target){
            resultArr.push(i);
        }
    }
    
    if(resultArr.length === 0) return 0;
    
    let answer = resultArr.pop() + 1;
    
    return answer;
};