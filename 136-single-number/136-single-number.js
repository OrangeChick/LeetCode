/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    const count = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === 1);
    }

    return getKeyByValue(count);

};