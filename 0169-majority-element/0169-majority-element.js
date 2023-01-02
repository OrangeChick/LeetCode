/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort(function(a, b){return a - b});
    return nums[Math.floor(nums.length / 2)];
};