/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let numsArr = [];
    for(let i = 0; i <= nums.length; i++){
        numsArr.push(i);
    }
    
    let difference = numsArr.filter(x => !nums.includes(x));
    
    return difference.join();
    
};