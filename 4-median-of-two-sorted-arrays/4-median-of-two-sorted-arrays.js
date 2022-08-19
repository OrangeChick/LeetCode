/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let array = nums1.concat(nums2).sort(function(a,b){return a-b});
    let arrayLength = array.length;
    
    for(let i = 0; i < arrayLength; i++){
        if(array.length % 2 != 0){
            return array[Math.floor(arrayLength / 2)]
        }
        else{
            return (array[Math.floor(arrayLength / 2)] 
                   + array[Math.floor(arrayLength / 2) - 1]) / 2
        }
    }
};