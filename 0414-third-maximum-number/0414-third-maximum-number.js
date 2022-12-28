/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const sortedNums = nums.sort(function(a,b){return b-a});
    const setNums = new Set(sortedNums);
    
    const result = [...setNums];
    
    console.log(result);
    
    if(result.length < 3) return result[0];
    return result[2];
};