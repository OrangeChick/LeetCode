/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let setNums1 = [...new Set(nums1)];
    let setNums2 = [...new Set(nums2)];
    
    const result = setNums1.filter(x => setNums2.includes(x));
    
    return result;
};