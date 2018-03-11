/*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majorityCount = Math.floor(nums.length / 2);
    const ht = {};
    let result = Number.MIN_SAFE_INTEGER;
    
    for(let i = 0; i < nums.length; i++) {
        if(!ht.hasOwnProperty(nums[i])) {
            ht[nums[i]] = 0;
        }
        
        ht[nums[i]]++;
    }
    
    for(prop in ht) {
        if(ht[prop] > majorityCount) {
            result = prop;
        }
    }
    
    return parseInt(result);
};